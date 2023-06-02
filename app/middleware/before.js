const logger = (req, res, next) => {
  req.action = `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  next()
}


const asyncHandler = fn => (req, res, next) => {
  Promise
    .resolve(fn(res, res, next))
    .catch(next)
}

module.exports = { logger, asyncHandler }

