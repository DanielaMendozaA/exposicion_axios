"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const userRepository_1 = __importDefault(require("../repository/userRepository"));
const userRepository = new userRepository_1.default("https://jsonplaceholder.typicode.com/users");
const userController = new userController_1.default(userRepository);
const userRouter = (0, express_1.Router)();
userRouter.get("/", userController.getUser.bind(userController));
exports.default = userRouter;
