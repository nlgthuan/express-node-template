import express from 'express';

import config from 'src/config';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello there');
});

app.listen(config.port, () =>
  console.log(`Server is listening on port ${config.port}`)
);
