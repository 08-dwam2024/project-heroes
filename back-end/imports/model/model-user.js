import { sequelize, DataTypes } from "../db.js";
import crypto from "crypto";

export const User = sequelize.define(
  "User",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(255), allowNull: false },
    role: { type: DataTypes.STRING(255) },
  },
  {
    hooks: {
      beforeSave: (user) => {
        if (user.changed("password")) {
          user.password = crypto.createHash("sha256").update(user.password).digest("hex");
        }
      },
    },
  }
);

User.prototype.validPassword = function (password) {
  return this.password === crypto.createHash("sha256").update(password).digest("hex");
};
