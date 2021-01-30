'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Memberships extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Memberships.init({
    name: DataTypes.STRING,
    price: DataTypes.NUMERIC,
    duration: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Memberships',
  });
  return Memberships;
};