'use strict';
module.exports = (sequelize, DataTypes) => {
  const Films = sequelize.define('Film', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    vignette: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  Films.associate = function(models) {
    // associations can be defined here
  };
  return Films;
};