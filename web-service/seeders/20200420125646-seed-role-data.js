'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        name: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'teacher',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'parent',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
