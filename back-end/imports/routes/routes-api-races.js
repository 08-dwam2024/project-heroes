import { Models } from "../model/model.js";
import { Middlewares } from "../../middlewares.js";

function initRoutesApiRace(app) {
  let { Race } = Models;

  // GET /api/race
  app.get("/api/race", Middlewares.auth, async (req, res) => {
    const races = await Race.findAll();
    res.json(races);
  });

  // GET /api/race/:id
  app.get("/api/race/:id", Middlewares.auth, async (req, res) => {
    const race = await Race.findByPk(req.params.id);
    if (!race) {
      return res.status(404).json({ message: "Race non trouvé" });
    }
    res.json(race);
  });

  // POST /api/race
  app.post("/api/race", Middlewares.auth, async (req, res) => {
    const race = await Race.create(req.body);
    res.json(race);
  });

  // PUT /api/race/:id
  app.put("/api/race/:id", Middlewares.auth, async (req, res) => {
    const race = await Race.findByPk(req.params.id);
    if (!race) {
      return res.status(404).json({ message: "Race non trouvé" });
    }
    await race.update(req.body);
    res.json(race);
  });

  // DELETE /api/race/:id
  app.delete("/api/race/:id", Middlewares.auth, async (req, res) => {
    const race = await Race.findByPk(req.params.id);
    if (!race) {
      return res.status(404).json({ message: "Race non trouvé" });
    }
    await race.destroy();
    res.json({ message: "Race supprimé" });
  });
}

export { initRoutesApiRace };
