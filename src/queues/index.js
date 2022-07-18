import { Queue } from 'bullmq';

import config from 'config';
import { SEND_WELCOME_EMAIL } from 'constants/queues';

const connection = config.redis;

const sendWelcomeEmailQueue = new Queue(SEND_WELCOME_EMAIL, {
  connection,
});

export default sendWelcomeEmailQueue;
