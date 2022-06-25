import express from 'express';
import morgan from 'morgan';

import config from 'src/config';
import errorHandler from 'src/middlewares/errorhandler';
import authRouter from 'src/routes/auth';
import logger from 'src/utils/logger';

const app = express();

app.use(
  morgan('combined', {
    stream: {
      write: (message) => logger.http(message),
    },
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  logger.info('Hello theres');
  res.send('Hello there');
});

app.use('/auth', authRouter);

app.use(errorHandler);

app.listen(config.port, () =>
  logger.info(`Server started on port ${config.port}`)
);
