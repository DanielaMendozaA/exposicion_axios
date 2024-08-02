"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const userRepository = new UserRepository("https://jsonplaceholder.typicode.com/users");
class UserController {
    constructor(UserRepository) {
        this.UserRepository = UserRepository;
        this.UserRepository = UserRepository;
    }
    async getUser(_, res) {
        try {
            const getUsers = await this.UserRepository.getUsers();
            res.status(200).json({
                status: 200,
                users: getUsers
            });
        }
        catch (error) {
            res.status(500).json({
                status: 500,
                error: error.message
            });
        }
    }
}
exports.default = UserController;
