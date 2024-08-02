import { Request, Response } from "express";
import UserService from "../services/userService";
import { container } from "tsyringe";

class UserController {

    static async getUsers (_: Request, res: Response): Promise<void>{
        try{
            // const users = await container.resolve(UserService).getUsers();
            const userService = container.resolve(UserService);
            const users = await userService.getUsers();
            res.status(200).json({
                status: 200,
                users: users
            });

        }catch(error: any){
            res.status(500).json({
                status: 500,
                error: error.message

            })
        }
    }
}

export default UserController;