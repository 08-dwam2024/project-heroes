import { Models } from "../model/model.js";
import { Middlewares } from "../../middlewares.js";

function initRoutesApiPowers(app) {
  let { Power } = Models;

  // GET /api/powers
  app.get("/api/powers", Middlewares.auth, async (req, res) => {
    const powers = await Power.findAll();
    res.json(powers);
  });

  // GET /api/powers/:id
  app.get("/api/powers/:id", Middlewares.auth, async (req, res) => {
    const power = await Power.findByPk(req.params.id);
    if (!power) {
      return res.status(404).json({ message: "Power non trouvé" });
    }
    res.json(power);
  });

  // POST /api/powers
  app.post("/api/powers", Middlewares.auth, async (req, res) => {
    const power = await Power.create(req.body);
    res.json(power);
  });

  // PUT /api/powers/:id
  app.put("/api/powers/:id", Middlewares.auth, async (req, res) => {
    const power = await Power.findByPk(req.params.id);
    if (!power) {
      return res.status(404).json({ message: "Power non trouvé" });
    }
    await power.update(req.body);
    res.json(power);
  });

  // DELETE /api/powers/:id
  app.delete("/api/powers/:id", Middlewares.auth, async (req, res) => {
    const power = await Power.findByPk(req.params.id);
    if (!power) {
      return res.status(404).json({ message: "Power non trouvé" });
    }
    await power.destroy();
    res.json({ message: "Power supprimé" });
  });
}

export { initRoutesApiPowers };
