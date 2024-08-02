import express, { Router } from 'express';
import userRouter from './userRouter';

const mainRouter: Router = express.Router();
mainRouter.use("/users", userRouter);

export default mainRouter;