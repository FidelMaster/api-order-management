'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Añadir la clave foránea customer_id a la tabla Orders
    await queryInterface.addConstraint('orders', {
      fields: ['customer_id'],
      type: 'foreign key',
      name: 'fk_orders_customers', // Nombre de la restricción (opcional)
      references: {
        table: 'customers', // Nombre de la tabla referenciada
        field: 'id', // Clave primaria de la tabla referenciada
      },
      onUpdate: 'CASCADE',
      onDelete: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar la clave foránea customer_id de la tabla Orders
    await queryInterface.removeConstraint('orders', 'fk_orders_customers');
  },
};
