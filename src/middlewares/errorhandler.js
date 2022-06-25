import { StatusCodes } from 'http-status-codes';
import { ValidationError } from 'sequelize';

import { ErrorWithStatusCode } from 'utils/errors';
import logger from 'utils/logger';

const errorHandler = (err, req, res, next) => {
  logger.error(err.message);

  if (err instanceof ValidationError) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
  }

  if (err instanceof ErrorWithStatusCode) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  return next(err);
};

export default errorHandler;
