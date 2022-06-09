import express from 'express';
import { StatusCodes } from 'http-status-codes';

import userServices from 'src/services/user';

const authRouter = express.Router();

authRouter.post('/signup', async (req, res) => {
  // validate req body, create DTO

  const userDTO = req.body;

  const user = await userServices.createUser(userDTO);

  res.status(StatusCodes.CREATED).json(user);
});

export default authRouter;
