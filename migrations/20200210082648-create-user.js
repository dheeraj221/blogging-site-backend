'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        type: Sequelize.UUID
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique : true
      },
      password: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
