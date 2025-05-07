import { sequelize, DataTypes } from "../db.js";
import { Character } from "./model-character.js";

export const IsEnnemyWith = sequelize.define("IsEnnemyWith", {}, {
  timestamps: false,
});

Character.belongsToMany(Character, {
  through: IsEnnemyWith,
  as: "Enemies",
  foreignKey: "id_character",
  otherKey: "id_ennemy",
});
