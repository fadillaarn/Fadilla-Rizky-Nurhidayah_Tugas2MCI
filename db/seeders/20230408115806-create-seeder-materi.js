'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('materis', [
      {
        nama_materi: 'Materi 1',
        pemateri: 'Pemateri 1',
        tanggal: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama_materi: 'Materi 2',
        pemateri: 'Pemateri 2',
        tanggal: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
