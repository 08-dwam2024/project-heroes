import { Models } from "../model/model.js";
import { Middlewares } from "../../middlewares.js";

function initRoutesApiCustomTeamCompositions(app) {
  let { CustomTeamComposition } = Models;

  // GET /api/custom-team-compositions
  app.get("/api/custom-team-compositions", Middlewares.auth, async (req, res) => {
    const data = await CustomTeamComposition.findAll();
    res.json(data);
  });

  // POST /api/custom-team-compositions
  app.post("/api/custom-team-compositions", Middlewares.auth, async (req, res) => {
    const entry = await CustomTeamComposition.create(req.body);
    res.json(entry);
  });

  // DELETE /api/custom-team-compositions/:characterId/:teamId
  app.delete("/api/custom-team-compositions/:characterId/:teamId", Middlewares.auth, async (req, res) => {
    const entry = await CustomTeamComposition.findOne({
      where: {
        id_character: req.params.characterId,
        id_team: req.params.teamId
      }
    });
    if (!entry) {
      return res.status(404).json({ message: "Composition non trouvée" });
    }
    await entry.destroy();
    res.json({ message: "Composition supprimée" });
  });
}

export { initRoutesApiCustomTeamCompositions };
