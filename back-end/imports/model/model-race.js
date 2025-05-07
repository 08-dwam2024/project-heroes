import { sequelize, DataTypes } from "../db.js";

export const Race = sequelize.define("Race", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(255), allowNull: false },
  description: { type: DataTypes.STRING(255), allowNull: false },
  main_planet: { type: DataTypes.STRING(255) },
});
