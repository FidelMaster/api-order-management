import UserRepository from '../../../../repositories/user.repository';
 
class UserService {
    async getAllUsers() {
        return UserRepository.getAll();
    }
}

export default new UserService();