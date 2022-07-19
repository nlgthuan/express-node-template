import { isCelebrateError } from 'celebrate';
import { StatusCodes } from 'http-status-codes';
import { ValidationError } from 'sequelize';

import { ErrorWithStatusCode } from 'utils/errors';
import logger from 'utils/logger';

const errorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    logger.error(err.message);

    return res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
  }

  if (err instanceof ErrorWithStatusCode) {
    logger.error(err.message);

    return res.status(err.statusCode).json({ error: err.message });
  }

  if (isCelebrateError(err)) {
    const { details } = err;

    let message;
    details.forEach((joiError) => {
      message = joiError.details.map((x) => x.message).join('');
    });

    logger.error(message);

    return res.status(StatusCodes.BAD_REQUEST).json({ error: message });
  }

  return next(err);
};

export default errorHandler;
