const logger = (req, res, next) => {
  req.action = `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  next()
}

module.exports = { logger}

