const logger = (req, res, next) => {
  // middleware functions have req, res, and next params
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);

  // with middleware, we end it either by:
  // sending back our own response through res.send()
  // passing onto the next function or middleware with next()
  next();
};

module.exports = logger;
