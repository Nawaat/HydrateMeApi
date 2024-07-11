import { Router } from 'express';
import { createUser, getUsers } from '../controllers/userController';

const userRouter = Router();

userRouter.post('/', createUser);
userRouter.get('/', getUsers);

export { userRouter };
