'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Añadir la columna con foreign key
    await queryInterface.addColumn('orders', 'distribution_route_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'distribution_routes', // nombre de la tabla referenciada
        key: 'id',                // llave primaria de la tabla referenciada
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',        // puedes usar 'CASCADE' o 'RESTRICT' según tu necesidad
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remover la columna
    await queryInterface.removeColumn('TableName', 'newColumnId');
  }
};
