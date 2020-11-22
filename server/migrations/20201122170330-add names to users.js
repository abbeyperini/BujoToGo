'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'first_name', {type: Sequelize.STRING})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'first_name')
  }
};
