'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instructors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Lessons, {
        foreignKey: "instructor_id"
      });
    }
  };
  Instructors.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Instructors',
  });
  return Instructors;
};