'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'last_name', {type: Sequelize.STRING})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'last_name')
  }
};
