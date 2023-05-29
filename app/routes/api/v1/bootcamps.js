const router = require('express').Router()
const controllers = require('../../../controllers')

router.get('/', controllers.api.v1.bootcampsController.getList)

router.get('/:id', controllers.api.v1.bootcampsController.getOne)

router.post('/', controllers.api.v1.bootcampsController.createOne)

router.put('/:id', controllers.api.v1.bootcampsController.updateOne)

router.delete('/:id', controllers.api.v1.bootcampsController.deleteOne)

module.exports = router