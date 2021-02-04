'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Clients, {
        foreignKey: "client_id"
      });
      this.belongsTo(models.Memberships, {
        foreignKey: "membership_id"
      });
    }
  };
  Payments.init({
    client_id: DataTypes.INTEGER,
    membership_id: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Payments',
  });
  return Payments;
};