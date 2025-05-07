import { Models } from "../model/model.js";
import { Middlewares } from "../../middlewares.js";

function initRoutesApiWeapons(app) {
  let { Weapon } = Models;

  // GET /api/weapons
  app.get("/api/weapons", Middlewares.auth, async (req, res) => {
    const weapons = await Weapon.findAll();
    res.json(weapons);
  });

  // GET /api/weapons/:id
  app.get("/api/weapons/:id", Middlewares.auth, async (req, res) => {
    const weapon = await Weapon.findByPk(req.params.id);
    if (!weapon) {
      return res.status(404).json({ message: "Weapon non trouvé" });
    }
    res.json(weapon);
  });

  // POST /api/weapons
  app.post("/api/weapons", Middlewares.auth, async (req, res) => {
    const weapon = await Weapon.create(req.body);
    res.json(weapon);
  });

  // PUT /api/weapons/:id
  app.put("/api/weapons/:id", Middlewares.auth, async (req, res) => {
    const weapon = await Weapon.findByPk(req.params.id);
    if (!weapon) {
      return res.status(404).json({ message: "Weapon non trouvé" });
    }
    await weapon.update(req.body);
    res.json(weapon);
  });

  // DELETE /api/weapons/:id
  app.delete("/api/weapons/:id", Middlewares.auth, async (req, res) => {
    const weapon = await Weapon.findByPk(req.params.id);
    if (!weapon) {
      return res.status(404).json({ message: "Weapon non trouvé" });
    }
    await weapon.destroy();
    res.json({ message: "Weapon supprimé" });
  });
}

export { initRoutesApiWeapons };
