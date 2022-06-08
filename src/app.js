import express from 'express';

import config from 'src/config';
import db from 'src/models';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello there');
});

db.sequelize.authenticate();

app.listen(config.port, () =>
  console.log(`Server is listening on port ${config.port}`)
);
