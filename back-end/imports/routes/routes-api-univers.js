import { Models } from "../model/model.js";
import { Middlewares } from "../../middlewares.js";

function initRoutesApiUnivers(app) {
  let { Univers } = Models;

  // GET /api/univers
  app.get("/api/univers", Middlewares.auth, async (req, res) => {
    const universes = await Univers.findAll();
    res.json(universes);
  });

  // GET /api/univers/:id
  app.get("/api/univers/:id", Middlewares.auth, async (req, res) => {
    const universe = await Univers.findByPk(req.params.id);
    if (!universe) {
      return res.status(404).json({ message: "Universe non trouvé" });
    }
    res.json(universe);
  });

  // POST /api/univers
  app.post("/api/univers", Middlewares.auth, async (req, res) => {
    const universe = await Univers.create(req.body);
    res.json(universe);
  });

  // PUT /api/univers/:id
  app.put("/api/univers/:id", Middlewares.auth, async (req, res) => {
    const universe = await Univers.findByPk(req.params.id);
    if (!universe) {
      return res.status(404).json({ message: "Universe non trouvé" });
    }
    await universe.update(req.body);
    res.json(universe);
  });

  // DELETE /api/univers/:id
  app.delete("/api/univers/:id", Middlewares.auth, async (req, res) => {
    const universe = await Univers.findByPk(req.params.id);
    if (!universe) {
      return res.status(404).json({ message: "Universe non trouvé" });
    }
    await universe.destroy();
    res.json({ message: "Universe supprimé" });
  });
}

export { initRoutesApiUnivers };
