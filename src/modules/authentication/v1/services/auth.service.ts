import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import UserRepository from '../../../../repositories/user.repository';

class AuthService {
    async register(role_id: number, name: string, email: string, clear_password: string) {
        const hashedPassword = await bcrypt.hash(clear_password, 10); // Hash de la contraseña

        let newUser = {
            role_id: role_id,
            name: name,
            email: email,
            password_digest: hashedPassword,
            is_active: true
        };

        return UserRepository.createUser(newUser);
    }

    async authenticate(email: string, clear_password: string) {
        const user = await UserRepository.findByEmail(email);
        if (!user) {
          throw new Error('User not found');
        }
    
        const isValidPassword = await bcrypt.compare(clear_password, user.password_digest);
        if (!isValidPassword) {
          throw new Error('Invalid password');
        }
    
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' }); // Generar token JWT
        return token;
    }
}

export default new AuthService();