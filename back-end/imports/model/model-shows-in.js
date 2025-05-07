import { sequelize, DataTypes } from "../db.js";
import { Character } from "./model-character.js";
import { Movie } from "./model-movie.js";

export const ShowsIn = sequelize.define("ShowsIn", {}, {
  timestamps: false,
});

Character.belongsToMany(Movie, {
  through: ShowsIn,
  foreignKey: "id_character",
});
Movie.belongsToMany(Character, {
  through: ShowsIn,
  foreignKey: "id_movie",
});
