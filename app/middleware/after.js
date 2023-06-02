const utils = require('../utils');
const errorHandler = (err,req,res,next)=>{
  let error = { ...err }
  error.message = err.message

  if(err.name === 'CastError'){
      const message = `Resource not found width id of : ${err.value}`
      error = new utils.ErrorResponse(message,404)
  }
  if(err.code == 11000){
    const message = `Duplicate field value entered`
    error = new utils.ErrorResponse(message, 400)
  }
  if(err.name === 'ValidationError'){
    const message = Object.values(err.errors).map(val => val.message )
    error = new utils.ErrorResponse(message, 400)
  }

  res.status(error.statusCode || 500).send({
      success: false,
      error: error.message || 'Server error',
      action: `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`,
      code: error.statusCode,
  })
}

const successHandler = (req,res)=>{
  res.status(res.statusCode || 500).send({
      data: data,
      success: true,
      message: res.message || 'Server error',
      action: `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  })
}

module.exports = { errorHandler, successHandler }

