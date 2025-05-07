import { Models } from "../model/model.js";
import { Middlewares } from "../../middlewares.js";

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
}

export { initRoutesApiUser };
