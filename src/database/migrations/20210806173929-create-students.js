'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('students', {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
          }, 
          name: {
            type: Sequelize.STRING,
            allowNull: false
          }, 
          email: {
            type: Sequelize.STRING,
            allowNull: false
          }, 
          cpf: {
            type: Sequelize.STRING,
            allowNull: false
          },
        });
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
