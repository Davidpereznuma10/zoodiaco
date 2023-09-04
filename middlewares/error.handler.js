const Boom = require('@hapi/boom');

function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
};

function boomError(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }else
    next(err);
};

function errorHanlder(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};

module.exports = { logErrors, errorHanlder, boomError };
