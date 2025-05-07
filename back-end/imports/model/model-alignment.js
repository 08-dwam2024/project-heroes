import { sequelize, DataTypes } from "../db.js";

export const Alignment = sequelize.define("Alignment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(255), allowNull: false },
});
