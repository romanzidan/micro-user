'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [
      {
        name: 'Kyze Luci',
        profession: 'Web Developer',
        role: 'admin',
        email: 'kyzeluci@gmail.com',
        password: await bcrypt.hash('admin123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Roman Zidan',
        profession: 'UX/UI Designer',
        role: 'student',
        email: 'romanzidan@gmail.com',
        password: await bcrypt.hash('student123', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
