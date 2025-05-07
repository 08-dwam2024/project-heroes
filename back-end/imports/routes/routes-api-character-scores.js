import { Models } from "../model/model.js";
import { Middlewares } from "../../middlewares.js";

function initRoutesApiCharacterScores(app) {
  let { CharacterScore } = Models;

  // GET /api/character-scores
  app.get("/api/character-scores", Middlewares.auth, async (req, res) => {
    const scores = await CharacterScore.findAll();
    res.json(scores);
  });

  // GET /api/character-scores/:userId/:characterId
  app.get("/api/character-scores/:userId/:characterId", Middlewares.auth, async (req, res) => {
    const score = await CharacterScore.findOne({
      where: {
        id_user: req.params.userId,
        id_character: req.params.characterId,
      }
    });
    if (!score) {
      return res.status(404).json({ message: "Score non trouvé" });
    }
    res.json(score);
  });

  // POST /api/character-scores
  app.post("/api/character-scores", Middlewares.auth, async (req, res) => {
    const score = await CharacterScore.create(req.body);
    res.json(score);
  });

  // PUT /api/character-scores/:userId/:characterId
  app.put("/api/character-scores/:userId/:characterId", Middlewares.auth, async (req, res) => {
    const score = await CharacterScore.findOne({
      where: {
        id_user: req.params.userId,
        id_character: req.params.characterId,
      }
    });
    if (!score) {
      return res.status(404).json({ message: "Score non trouvé" });
    }
    await score.update(req.body);
    res.json(score);
  });

  // DELETE /api/character-scores/:userId/:characterId
  app.delete("/api/character-scores/:userId/:characterId", Middlewares.auth, async (req, res) => {
    const score = await CharacterScore.findOne({
      where: {
        id_user: req.params.userId,
        id_character: req.params.characterId,
      }
    });
    if (!score) {
      return res.status(404).json({ message: "Score non trouvé" });
    }
    await score.destroy();
    res.json({ message: "Score supprimé" });
  });
}

export { initRoutesApiCharacterScores };
