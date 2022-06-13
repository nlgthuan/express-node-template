import express from 'express';
import { StatusCodes } from 'http-status-codes';

import userServices from 'src/services/user';

const authRouter = express.Router();

authRouter.post('/signup', async (req, res, next) => {
  const userDTO = req.body;

  try {
    const user = await userServices.createUser(userDTO);
    res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    next(error);
  }
});

authRouter.post('/login', async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const accessToken = await userServices.loginWithEmail(email, password);

    res.status(StatusCodes.OK).json({ accessToken });
  } catch (error) {
    next(error);
  }
});

export default authRouter;
