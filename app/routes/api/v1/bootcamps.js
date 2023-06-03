const router = require('express').Router()
const controllers = require('../../../controllers')
const asyncHandler = require('express-async-handler')

router.get('/', asyncHandler(controllers.api.v1.bootcampsController.getList))

router.get('/:id', asyncHandler(controllers.api.v1.bootcampsController.getOne))

router.post('/',  asyncHandler( controllers.api.v1.bootcampsController.createOne))

router.put('/:id',  asyncHandler( controllers.api.v1.bootcampsController.updateOne))

router.delete('/:id',  asyncHandler( controllers.api.v1.bootcampsController.deleteOne))

module.exports = router