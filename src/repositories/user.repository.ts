import User from "../models/User.model";
import { UserAttributes } from "../models/types/DbType";

class UserRepository {
    
    async getAll() {
        return User.findAll();
    }

    async findById(id: number) {
        return User.findByPk(id);
    }

    async findByEmail(email: string) {
        return User.findOne({ where: { email } });
    }

    async createUser(user: UserAttributes) { 
        return User.create({
            role_id: user.role_id,
            name: user.name,
            email: user.email,
            password_digest: user.password_digest,
            is_active: user.is_active
        });
    }
}

export default new UserRepository();