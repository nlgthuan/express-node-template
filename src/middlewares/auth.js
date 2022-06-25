import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

import config from 'config';
import { User } from 'models';

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      throw new Error();
    }

    const decoded = jwt.decode(token, config.jwtKey);
    const userId = decoded.id;
    req.user = await User.findByPk(userId);
    return next();
  } catch (err) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      error: 'Invalid Credentials!',
    });
  }
};

export default isAuthenticated;
