import express from 'express';
import { StatusCodes } from 'http-status-codes';

import authServices from 'src/services/auth';

const authRouter = express.Router();

authRouter.post('/signup', async (req, res, next) => {
  const userDTO = req.body;

  try {
    const user = await authServices.signup(userDTO);
    res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    next(error);
  }
});

authRouter.post('/login', async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const accessToken = await authServices.loginWithEmail(email, password);

    res.status(StatusCodes.OK).json({ accessToken });
  } catch (error) {
    next(error);
  }
});

export default authRouter;
