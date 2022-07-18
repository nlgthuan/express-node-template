import { Worker } from 'bullmq';

import config from 'config';
import { SEND_WELCOME_EMAIL } from 'constants/queues';
import logger from 'utils/logger';

const connection = config.redis;

const sendWelcomeEmail = async (job) => {
  logger.info(`Sending Email to: ${job.data.receiver}`);
  logger.info('Email successfully sent');
};

const myWorker = new Worker(SEND_WELCOME_EMAIL, sendWelcomeEmail, {
  connection,
});

export default myWorker;
