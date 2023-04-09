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

    await queryInterface.bulkInsert('users', [
      {
        nama: 'dilla',
        jenis_kelamin: 'Female',
        email: 'dsfsf@gmail.com',
        notelp: '081234567890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'iky',
        jenis_kelamin: "Female",
        email: 'iky@gmail.com',
        notelp: '081234567670',
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
