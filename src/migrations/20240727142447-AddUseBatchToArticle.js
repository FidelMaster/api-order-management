"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addColumn("articles", "use_batch", {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    });

    await queryInterface.addColumn("articles", "use_inventory", {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    });

    await queryInterface.addColumn("articles", "last_output_date", {
      type: Sequelize.DATE,
      allowNull: true,
    });

    await queryInterface.addColumn("articles", "reorder_point", {
      type: Sequelize.FLOAT,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
