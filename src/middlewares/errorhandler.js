import { StatusCodes } from 'http-status-codes';
import { ValidationError } from 'sequelize';

import { ErrorWithStatusCode } from 'src/utils/errors';
import logger from 'src/utils/logger';

const errorHandler = (err, req, res) => {
  logger.error(err.message);

  if (err instanceof ValidationError) {
    return res.status(StatusCodes.BAD_REQUEST).send(err.message);
  }

  if (err instanceof ErrorWithStatusCode) {
    return res.status(err.statusCode).send(err.message);
  }

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send('Internal server error!');
};

export default errorHandler;
