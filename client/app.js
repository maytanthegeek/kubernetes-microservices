const express = require('express');
const pino = require('pino');
const phin = require('phin');
const { POST_SERVICE, USER_SERVICE } = require('./api-url');

const app = express();
const logger = pino();
const request = phin.defaults({
  parse: 'json',
})
const port = 80;

app.use(express.static('public'));

app.get(/\/user.*/, (req, res) => {
  request(`${USER_SERVICE}${req.path}`)
    .then((data) => {
      logger.info(data.body);
      res.send({
        err: false,
        data: data.body,
      });
    })
    .catch((err) => {
      logger.error(err);
      res.send({
        err: true,
        data: err,
      });
    });
});
app.get(/\/post.*/, (req, res) => {
  request(`${POST_SERVICE}${req.path}`)
    .then((data) => {
      logger.info(data);
      res.send({
        err: false,
        data: data.body,
      });
    })
    .catch((err) => {
      logger.error(err);
      res.send({
        err: true,
        data: err,
      });
    });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
