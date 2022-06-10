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

export default authRouter;
