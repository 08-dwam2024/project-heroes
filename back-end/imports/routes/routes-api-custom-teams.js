import { Models } from "../model/model.js";
import { Middlewares } from "../../middlewares.js";

function initRoutesApiCustomTeams(app) {
  let { CustomTeam } = Models;

  // GET /api/custom_teams
  app.get("/api/custom_teams", Middlewares.auth, async (req, res) => {
    const customTeams = await CustomTeam.findAll();
    res.json(customTeams);
  });

  // GET /api/custom_teams/:id
  app.get("/api/custom_teams/:id", Middlewares.auth, async (req, res) => {
    const customTeam = await CustomTeam.findByPk(req.params.id);
    if (!customTeam) {
      return res.status(404).json({ message: "Custom Team non trouvé" });
    }
    res.json(customTeam);
  });

  // POST /api/custom_teams
  app.post("/api/custom_teams", Middlewares.auth, async (req, res) => {
    const customTeam = await CustomTeam.create(req.body);
    res.json(customTeam);
  });

  // PUT /api/custom_teams/:id
  app.put("/api/custom_teams/:id", Middlewares.auth, async (req, res) => {
    const customTeam = await CustomTeam.findByPk(req.params.id);
    if (!customTeam) {
      return res.status(404).json({ message: "Custom Team non trouvé" });
    }
    await customTeam.update(req.body);
    res.json(customTeam);
  });

  // DELETE /api/custom_teams/:id
  app.delete("/api/custom_teams/:id", Middlewares.auth, async (req, res) => {
    const customTeam = await CustomTeam.findByPk(req.params.id);
    if (!customTeam) {
      return res.status(404).json({ message: "Custom Team non trouvé" });
    }
    await customTeam.destroy();
    res.json({ message: "Custom Team supprimé" });
  });
}

export { initRoutesApiCustomTeams };
