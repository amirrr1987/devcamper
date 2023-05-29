const router = require('express').Router()
const bootcamps = require('./bootcamps')

router.use('/bootcamps', bootcamps)

module.exports = router