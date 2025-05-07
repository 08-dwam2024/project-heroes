import { sequelize } from "../db.js";

import { User } from "./model-user.js";
import { Movie } from "./model-movie.js";
import { Power } from "./model-power.js";
import { Weapon } from "./model-weapon.js";
import { Univers } from "./model-univers.js";
import { Race } from "./model-race.js";
import { Alignment } from "./model-alignment.js";
import { Team } from "./model-team.js";
import { CustomTeam } from "./model-custom-team.js";
import { Character } from "./model-character.js";
import { IsEnnemyWith } from "./model-is-ennemy-with.js";
import { ShowsIn } from "./model-shows-in.js";
import { Owns } from "./model-owns.js";
import { CharacterScore } from "./model-character-score.js";
import { CustomTeamComposition } from "./model-custom-team-composition.js";

// Relations already defined in individual model files

await sequelize.sync({ alter: true });

export const Models = {
  User,
  Movie,
  Power,
  Weapon,
  Univers,
  Race,
  Alignment,
  Team,
  CustomTeam,
  Character,
  IsEnnemyWith,
  ShowsIn,
  Owns,
  CharacterScore,
  CustomTeamComposition,
};
