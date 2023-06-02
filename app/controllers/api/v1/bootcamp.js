const utils = require('../../../utils');
const models = require('../../../models')
const middleware = require('../../../middleware');
class Bootcamps {
    // async middleware.before.asyncHandler()

    getList = middleware.before.asyncHandler(async (req, res, next) => {
        const bootcamps = await models.api.v1.bootcampModel.find()
        res.status(200).send({
            data: bootcamps,
            success: true,
            message: '',
            code: 200,
            action: req.action
        })
    })

    getOne = middleware.before.asyncHandler(async (req, res, next)=>{
        console.log(req.params);
        // const bootcamp = await models.api.v1.bootcampModel.findById(req.params.id)
        // if (!bootcamp) {
        //     return next(new utils.ErrorResponse(`Bootcamp not found width id of : ${req.params.id}`, 404))
        // }

        // res.status(200).send({
        //     data: bootcamp,
        //     success: true,
        //     message: '',
        //     code: 200,
        //     action: req.action
        // })
    })


    async createOne(req, res, next) {
        try {
            const bootcamp = await models.api.v1.bootcampModel.create(req.body)

            res.status(201).json({
                data: bootcamp,
                success: true,
                message: '',
                code: 201,
                action: req.action
            })

        } catch (err) {
            next(err)
        }
    }
    async updateOne(req, res, next) {
        try {
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
        } catch (err) {
            next(err)
        }
    }
    async deleteOne(req, res, next) {

        try {
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
        } catch (err) {
            next(err)
        }

    }
}

module.exports = new Bootcamps()