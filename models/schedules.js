'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Schedules.init({
    lesson_id: DataTypes.INTEGER,
    start: DataTypes.STRING,
    finish: DataTypes.STRING,
    day_of_week: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Schedules',
  });
  return Schedules;
};