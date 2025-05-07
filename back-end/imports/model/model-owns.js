import { sequelize, DataTypes } from "../db.js";
import { Character } from "./model-character.js";
import { Power } from "./model-power.js";
import { Weapon } from "./model-weapon.js";

export const Owns = sequelize.define("Owns", {}, {
  timestamps: false,
});

Character.belongsToMany(Power, {
  through: Owns,
  foreignKey: "id_character",
  otherKey: "id_power",
});
Power.belongsToMany(Character, {
  through: Owns,
  foreignKey: "id_power",
  otherKey: "id_character",
});

Character.belongsToMany(Weapon, {
  through: Owns,
  foreignKey: "id_character",
  otherKey: "id_weapon",
});
Weapon.belongsToMany(Character, {
  through: Owns,
  foreignKey: "id_weapon",
  otherKey: "id_character",
});
