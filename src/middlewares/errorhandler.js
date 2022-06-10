import { StatusCodes } from 'http-status-codes';
import { ValidationError } from 'sequelize';

const errorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(StatusCodes.BAD_REQUEST).send(err.message);
  }

  next(err);
};

export default errorHandler;
