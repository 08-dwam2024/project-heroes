import { sequelize, DataTypes } from "../db.js";
import { User } from "./model-user.js";

export const CustomTeam = sequelize.define("CustomTeam", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(255), allowNull: false },
  created_at: { type: DataTypes.DATE },
});

CustomTeam.belongsTo(User, {
  foreignKey: "id_user",
  onDelete: "CASCADE",
});
User.hasMany(CustomTeam, { foreignKey: "id_user" });
