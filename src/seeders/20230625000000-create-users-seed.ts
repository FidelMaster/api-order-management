// src/seeders/20230625000000-create-users-seed.ts
import { QueryInterface } from 'sequelize';
import bcrypt from 'bcrypt';

export = {
    up: async (queryInterface: QueryInterface) => {
        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash('yourpassword', 10);

        // Insertar el usuario con el ID del rol
        await queryInterface.bulkInsert('users', [
            {
                role_id: 1,
                name: 'Fidel',
                email: 'admin@gmail.com',
                password_digest: hashedPassword,
                is_active: true
            }
        ]);


    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete('users', {
            email: ['john.doe@example.com', 'jane.smith@example.com'],
        });
    },
};
