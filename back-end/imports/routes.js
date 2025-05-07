import express from "express";

// Import des initialiseurs de routes
import { initRoutesApiUser } from "./routes/routes-api-users.js";
import { initRoutesApiMovies } from "./routes/routes-api-movies.js";
import { initRoutesApiPowers } from "./routes/routes-api-powers.js";
import { initRoutesApiWeapons } from "./routes/routes-api-weapons.js";
import { initRoutesApiUnivers } from "./routes/routes-api-univers.js";
import { initRoutesApiRace } from "./routes/routes-api-races.js";
import { initRoutesApiAlignments } from "./routes/routes-api-alignments.js";
import { initRoutesApiTeams } from "./routes/routes-api-teams.js";
import { initRoutesApiCustomTeams } from "./routes/routes-api-custom-teams.js";
import { initRoutesApiCharacters } from "./routes/routes-api-characters.js";
import { initRoutesApiIsEnnemyWith } from "./routes/routes-api-is-ennemy-with.js";
import { initRoutesApiCharacterScores } from "./routes/routes-api-character-scores.js";
import { initRoutesApiOwns } from "./routes/routes-api-owns.js";
import { initRoutesApiShowsIn } from "./routes/routes-api-shows-in.js";
import { initRoutesApiCustomTeamCompositions } from "./routes/routes-api-custom-team-compositions.js";

function initAllRoutes(app) {
  const router = express.Router();

  initRoutesApiUser(app);
  initRoutesApiMovies(app);
  initRoutesApiPowers(app);
  initRoutesApiWeapons(app);
  initRoutesApiUnivers(app);
  initRoutesApiRace(app);
  initRoutesApiAlignments(app);
  initRoutesApiTeams(app);
  initRoutesApiCustomTeams(app);
  initRoutesApiCharacters(app);
  initRoutesApiIsEnnemyWith(app);
  initRoutesApiCharacterScores(app);
  initRoutesApiOwns(app);
  initRoutesApiShowsIn(app);
  initRoutesApiCustomTeamCompositions(app);

  app.use(router);
}

export { initAllRoutes };
