import { Models } from "../model/model.js";
import { Middlewares } from "../../middlewares.js";

function initRoutesApiMovies(app) {
  let { Movie } = Models;

  // GET /api/movies
  app.get("/api/movies", Middlewares.auth, async (req, res) => {
    const movies = await Movie.findAll();
    res.json(movies);
  });

  // GET /api/movies/:id
  app.get("/api/movies/:id", Middlewares.auth, async (req, res) => {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie non trouvé" });
    }
    res.json(movie);
  });

  // POST /api/movies
  app.post("/api/movies", Middlewares.auth, async (req, res) => {
    const movie = await Movie.create(req.body);
    res.json(movie);
  });

  // PUT /api/movies/:id
  app.put("/api/movies/:id", Middlewares.auth, async (req, res) => {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie non trouvé" });
    }
    await movie.update(req.body);
    res.json(movie);
  });

  // DELETE /api/movies/:id
  app.delete("/api/movies/:id", Middlewares.auth, async (req, res) => {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie non trouvé" });
    }
    await movie.destroy();
    res.json({ message: "Movie supprimé" });
  });
}

export { initRoutesApiMovies };
