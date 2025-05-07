import { sequelize, DataTypes } from "../db.js";
import { Character } from "./model-character.js";
import { CustomTeam } from "./model-custom-team.js";

export const CustomTeamComposition = sequelize.define("CustomTeamComposition", {}, {
  timestamps: false,
});

Character.belongsToMany(CustomTeam, {
  through: CustomTeamComposition,
  foreignKey: "id_character",
});
CustomTeam.belongsToMany(Character, {
  through: CustomTeamComposition,
  foreignKey: "id_team",
});
