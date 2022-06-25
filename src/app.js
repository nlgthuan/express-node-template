import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import config from 'config';
import errorHandler from 'middlewares/errorhandler';
import authRouter from 'routes/auth';
import logger from 'utils/logger';

const app = express();

app.use(cors());

app.use(
  morgan('combined', {
    stream: {
      write: (message) => logger.http(message),
    },
  })
);

app.use(express.json());

app.use('/auth', authRouter);

app.use(errorHandler);

app.listen(config.port, () =>
  logger.info(`Server started on port ${config.port}`)
);
