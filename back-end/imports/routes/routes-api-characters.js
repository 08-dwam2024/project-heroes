import { Models } from "../model/model.js";
import { Middlewares } from "../../middlewares.js";

function initRoutesApiCharacters(app) {
  let { Character } = Models;

  // GET /api/characters
  app.get("/api/characters", Middlewares.auth, async (req, res) => {
    const characters = await Character.findAll();
    res.json(characters);
  });

  // GET /api/characters/:id
  app.get("/api/characters/:id", Middlewares.auth, async (req, res) => {
    const character = await Character.findByPk(req.params.id);
    if (!character) {
      return res.status(404).json({ message: "Character non trouvé" });
    }
    res.json(character);
  });

  // POST /api/characters
  app.post("/api/characters", Middlewares.auth, async (req, res) => {
    const character = await Character.create(req.body);
    res.json(character);
  });

  // PUT /api/characters/:id
  app.put("/api/characters/:id", Middlewares.auth, async (req, res) => {
    const character = await Character.findByPk(req.params.id);
    if (!character) {
      return res.status(404).json({ message: "Character non trouvé" });
    }
    await character.update(req.body);
    res.json(character);
  });

  // DELETE /api/characters/:id
  app.delete("/api/characters/:id", Middlewares.auth, async (req, res) => {
    const character = await Character.findByPk(req.params.id);
    if (!character) {
      return res.status(404).json({ message: "Character non trouvé" });
    }
    await character.destroy();
    res.json({ message: "Character supprimé" });
  });
}

export { initRoutesApiCharacters };
