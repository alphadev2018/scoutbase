'use strict';
module.exports = (sequelize, DataTypes) => {
  const movies = sequelize.define('movies', {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    rating: DataTypes.DOUBLE
  }, {});
  movies.associate = function(models) {
    // associations can be defined here
  };
  return movies;
};