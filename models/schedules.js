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
      this.belongsToMany(models.Lessons, { 
        through: "SchedulesLessons"
      });
      this.belongsToMany(models.Clients, { 
        through: "SchedulesClients"
      });
    }
  };
  Schedules.init({
    lesson_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    start: DataTypes.DATE,
    finish: DataTypes.DATE,
    day_of_week: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Schedules',
  });
  return Schedules;
};