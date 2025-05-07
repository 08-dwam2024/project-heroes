import { Models } from "../model/model.js";
import { Middlewares } from "../../middlewares.js";

function initRoutesApiShowsIn(app) {
  let { ShowsIn } = Models;

  // GET /api/shows-in
  app.get("/api/shows-in", Middlewares.auth, async (req, res) => {
    const data = await ShowsIn.findAll();
    res.json(data);
  });

  // POST /api/shows-in
  app.post("/api/shows-in", Middlewares.auth, async (req, res) => {
    const entry = await ShowsIn.create(req.body);
    res.json(entry);
  });

  // DELETE /api/shows-in/:characterId/:movieId
  app.delete("/api/shows-in/:characterId/:movieId", Middlewares.auth, async (req, res) => {
    const entry = await ShowsIn.findOne({
      where: {
        id_character: req.params.characterId,
        id_movie: req.params.movieId
      }
    });
    if (!entry) {
      return res.status(404).json({ message: "Relation ShowsIn non trouvée" });
    }
    await entry.destroy();
    res.json({ message: "Relation supprimée" });
  });
}

export { initRoutesApiShowsIn };
