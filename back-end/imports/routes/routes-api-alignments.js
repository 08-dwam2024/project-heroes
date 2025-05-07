import { Models } from "../model/model.js";
import { Middlewares } from "../../middlewares.js";

function initRoutesApiAlignments(app) {
  let { Alignment } = Models;

  // GET /api/alignments
  app.get("/api/alignments", Middlewares.auth, async (req, res) => {
    const alignments = await Alignment.findAll();
    res.json(alignments);
  });

  // GET /api/alignments/:id
  app.get("/api/alignments/:id", Middlewares.auth, async (req, res) => {
    const alignment = await Alignment.findByPk(req.params.id);
    if (!alignment) {
      return res.status(404).json({ message: "Alignment non trouvé" });
    }
    res.json(alignment);
  });

  // POST /api/alignments
  app.post("/api/alignments", Middlewares.auth, async (req, res) => {
    const alignment = await Alignment.create(req.body);
    res.json(alignment);
  });

  // PUT /api/alignments/:id
  app.put("/api/alignments/:id", Middlewares.auth, async (req, res) => {
    const alignment = await Alignment.findByPk(req.params.id);
    if (!alignment) {
      return res.status(404).json({ message: "Alignment non trouvé" });
    }
    await alignment.update(req.body);
    res.json(alignment);
  });

  // DELETE /api/alignments/:id
  app.delete("/api/alignments/:id", Middlewares.auth, async (req, res) => {
    const alignment = await Alignment.findByPk(req.params.id);
    if (!alignment) {
      return res.status(404).json({ message: "Alignment non trouvé" });
    }
    await alignment.destroy();
    res.json({ message: "Alignment supprimé" });
  });
}

export { initRoutesApiAlignments };
