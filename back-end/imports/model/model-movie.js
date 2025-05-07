import { sequelize, DataTypes } from "../db.js";

export const Movie = sequelize.define("Movie", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  released_year: { type: DataTypes.SMALLINT, allowNull: false },
  title: { type: DataTypes.STRING(255), allowNull: false },
  wiki_link: { type: DataTypes.STRING(255) },
  score: { type: DataTypes.SMALLINT },
});
