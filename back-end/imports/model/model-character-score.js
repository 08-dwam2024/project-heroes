import { sequelize, DataTypes } from "../db.js";
import { User } from "./model-user.js";
import { Character } from "./model-character.js";

export const CharacterScore = sequelize.define("CharacterScore", {
  score: { type: DataTypes.SMALLINT, allowNull: false },
}, {
  timestamps: false,
});

User.belongsToMany(Character, {
  through: CharacterScore,
  foreignKey: "id_user",
});
Character.belongsToMany(User, {
  through: CharacterScore,
  foreignKey: "id_character",
});
