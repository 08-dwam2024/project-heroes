import { sequelize, DataTypes } from "../db.js";
import { Alignment } from "./model-alignment.js";
import { Team } from "./model-team.js";
import { Univers } from "./model-univers.js";
import { Race } from "./model-race.js";

export const Character = sequelize.define("Character", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  hero_name: { type: DataTypes.STRING(255), allowNull: false },
  nickname: { type: DataTypes.STRING(255) },
  civil_name: { type: DataTypes.STRING(255) },
  gender: { type: DataTypes.STRING(50) },
  strenght: { type: DataTypes.INTEGER },
  wiki_link: { type: DataTypes.STRING(255) },
});

Character.belongsTo(Alignment, { foreignKey: "id_alignment" });
Character.belongsTo(Team, { foreignKey: "id_team" });
Character.belongsTo(Univers, { foreignKey: "id_univers" });
Character.belongsTo(Race, { foreignKey: "id_race" });
