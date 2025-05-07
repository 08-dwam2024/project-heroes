import { Models } from "../model/model.js";
import { Middlewares } from "../../middlewares.js";

function initRoutesApiOwns(app) {
  let { Owns } = Models;

  // GET /api/owns
  app.get("/api/owns", Middlewares.auth, async (req, res) => {
    const data = await Owns.findAll();
    res.json(data);
  });

  // POST /api/owns
  app.post("/api/owns", Middlewares.auth, async (req, res) => {
    const own = await Owns.create(req.body);
    res.json(own);
  });

  // DELETE /api/owns/:characterId/:powerId/:weaponId
  app.delete("/api/owns/:characterId/:powerId/:weaponId", Middlewares.auth, async (req, res) => {
    const own = await Owns.findOne({
      where: {
        id_character: req.params.characterId,
        id_power: req.params.powerId,
        id_weapon: req.params.weaponId
      }
    });
    if (!own) {
      return res.status(404).json({ message: "Relation Owns non trouvée" });
    }
    await own.destroy();
    res.json({ message: "Relation supprimée" });
  });
}

export { initRoutesApiOwns };
