'use strict';
const {
  Model
} = require('sequelize');
const schedules = require('./schedules');
module.exports = (sequelize, DataTypes) => {
  class Lessons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Schedules, { 
        through: 'SchedulesLessons'
      });
      this.belongsTo(models.Instructors, {
        foreignKey: "instructor_id"
      })
    }
  };
  Lessons.init({
    instructor_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lessons',
  });
  return Lessons;
};