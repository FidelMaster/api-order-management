import { Router } from 'express';
import { signIn, register } from '../controllers/auth.controller';

const authRouter = Router();

authRouter.post('/v1/login', signIn);
authRouter.post('/v1/register', register);

export default authRouter;