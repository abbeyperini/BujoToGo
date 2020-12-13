'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Events', 'icon', {type: Sequelize.STRING})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Events', 'icon')
  }
};
