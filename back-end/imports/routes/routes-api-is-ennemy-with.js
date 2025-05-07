import { Models } from "../model/model.js";
import { Middlewares } from "../../middlewares.js";

function initRoutesApiIsEnnemyWith(app) {
  let { IsEnnemyWith } = Models;

  // GET /api/is_ennemy_with
  app.get("/api/is_ennemy_with", Middlewares.auth, async (req, res) => {
    const isEnnemyWith = await IsEnnemyWith.findAll();
    res.json(isEnnemyWith);
  });

  // GET /api/is_ennemy_with/:id
  app.get("/api/is_ennemy_with/:id", Middlewares.auth, async (req, res) => {
    const isEnnemyWith = await IsEnnemyWith.findByPk(req.params.id);
    if (!isEnnemyWith) {
      return res.status(404).json({ message: "Relation ennemi non trouvée" });
    }
    res.json(isEnnemyWith);
  });

  // POST /api/is_ennemy_with
  app.post("/api/is_ennemy_with", Middlewares.auth, async (req, res) => {
    const isEnnemyWith = await IsEnnemyWith.create(req.body);
    res.json(isEnnemyWith);
  });

  // DELETE /api/is_ennemy_with/:id
  app.delete("/api/is_ennemy_with/:id", Middlewares.auth, async (req, res) => {
    const isEnnemyWith = await IsEnnemyWith.findByPk(req.params.id);
    if (!isEnnemyWith) {
      return res.status(404).json({ message: "Relation ennemi non trouvée" });
    }
    await isEnnemyWith.destroy();
    res.json({ message: "Relation ennemi supprimée" });
  });
}

export { initRoutesApiIsEnnemyWith };
