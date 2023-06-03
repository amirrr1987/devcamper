const utils = require('../../../utils');
const models = require('../../../models')
const middleware = require('../../../middleware');

class Bootcamps {
    // async middleware.before.asyncHandler()

    async getList(req, res, next) {
        const bootcamps = await models.api.v1.bootcampModel.find()
        res.status(200).send({
            data: bootcamps,
            success: true,
            message: '',
            code: 200,
            action: req.action
        })
    }

    async getOne(req, res, next) {
        const bootcamp = await models.api.v1.bootcampModel.findById(req.params.id)
        if (!bootcamp) {
            return next(new utils.ErrorResponse(`Bootcamp not found width id of : ${req.params.id}`, 404))
        }
        res.status(200).send({
            data: bootcamp,
            success: true,
            message: '',
            code: 200,
            action: req.action
        })
    }
    async createOne(req, res, next) {
        const bootcamp = await models.api.v1.bootcampModel.create(req.body)
        res.status(201).json({
            data: bootcamp,
            success: true,
            message: '',
            code: 201,
            action: req.action
        })

    }
    async updateOne(req, res, next) {
        const bootcamp = await models.api.v1.bootcampModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        if (!bootcamp) {
            return next(new utils.ErrorResponse(`Bootcamp not found width id of : ${req.params.id}`, 404))
        }
        res.status(200).send({
            data: bootcamp,
            success: true,
            message: '',
            code: 200,
            action: req.action
        })
    }
    async deleteOne(req, res, next) {
        const bootcamp = await models.api.v1.bootcampModel.findByIdAndDelete(req.params.id)
        if (!bootcamp) {
            return next(new utils.ErrorResponse(`Bootcamp not found width id of : ${req.params.id}`, 404))
        }

        res.status(200).send({
            data: bootcamp,
            success: true,
            message: '',
            code: 200,
            action: req.action
        })
    }
}

module.exports = new Bootcamps()