import { Models } from "../model/model.js";
import { Middlewares } from "../../middlewares.js";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "default_secret";

function initRoutesApiUser(app) {
  let { User } = Models;

  // GET /api/users
  app.get("/api/users", Middlewares.auth, async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  });

  // GET /api/users/:id
  app.get("/api/users/:id", Middlewares.auth, async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User non trouvé" });
    }
    user.password = undefined;
    res.json(user);
  });

  // POST /api/users
  app.post("/api/users", Middlewares.auth, async (req, res) => {
    if (req.body.password === "") {
      return res.status(400).json({ message: "Mot de passe requis" });
    }
    const user = await User.create(req.body);
    res.json(user);
  });

  // PUT /api/users/:id
  app.put("/api/users/:id", Middlewares.auth, async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User non trouvé" });
    }
    if (req.body.password == "") {
      delete req.body.password;
    }
    await user.update(req.body);
    res.json(user);
  });

  // DELETE /api/users/:id
  app.delete("/api/users/:id", Middlewares.auth, async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User non trouvé" });
    }
    await user.destroy();
    res.json({ message: "User supprimé" });
  });

  // POST /api/users/login
  app.post("/api/users/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user || !user.validPassword(password)) {
      return res.status(401).json({ message: "Identifiants invalides" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      SECRET,
      { expiresIn: "24h" }
    );

    user.password = undefined;
    res.json({ user, token });
  });

  // POST /api/users/logoff
  app.post("/api/users/logoff", Middlewares.auth, (req, res) => {
    res.json({ message: "Déconnecté" });
  });
}

export { initRoutesApiUser };
