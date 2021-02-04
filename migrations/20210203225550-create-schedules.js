'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lesson_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Lessons',
          key: 'id'
        }
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clients',
          key: 'id'
        }
      },
      start: {
        type: Sequelize.DATE
      },
      finish: {
        type: Sequelize.DATE
      },
      day_of_week: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Schedules');
  }
};