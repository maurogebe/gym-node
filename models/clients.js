'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Payments, {
        foreignKey: "client_id"
      });
      this.belongsToMany(models.Schedules, { 
        through: "SchedulesClients"
      });
    }
  };
  Clients.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clients',
  });
  return Clients;
};