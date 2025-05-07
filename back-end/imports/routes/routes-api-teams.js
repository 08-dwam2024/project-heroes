import { Models } from "../model/model.js";
import { Middlewares } from "../../middlewares.js";

function initRoutesApiTeams(app) {
  let { Team } = Models;

  // GET /api/teams
  app.get("/api/teams", Middlewares.auth, async (req, res) => {
    const teams = await Team.findAll();
    res.json(teams);
  });

  // GET /api/teams/:id
  app.get("/api/teams/:id", Middlewares.auth, async (req, res) => {
    const team = await Team.findByPk(req.params.id);
    if (!team) {
      return res.status(404).json({ message: "Team non trouvé" });
    }
    res.json(team);
  });

  // POST /api/teams
  app.post("/api/teams", Middlewares.auth, async (req, res) => {
    const team = await Team.create(req.body);
    res.json(team);
  });

  // PUT /api/teams/:id
  app.put("/api/teams/:id", Middlewares.auth, async (req, res) => {
    const team = await Team.findByPk(req.params.id);
    if (!team) {
      return res.status(404).json({ message: "Team non trouvé" });
    }
    await team.update(req.body);
    res.json(team);
  });

  // DELETE /api/teams/:id
  app.delete("/api/teams/:id", Middlewares.auth, async (req, res) => {
    const team = await Team.findByPk(req.params.id);
    if (!team) {
      return res.status(404).json({ message: "Team non trouvé" });
    }
    await team.destroy();
    res.json({ message: "Team supprimé" });
  });
}

export { initRoutesApiTeams };
