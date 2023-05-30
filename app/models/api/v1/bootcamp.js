const mongoose = require('mongoose')

const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxLength: [50,'Name can not be more than 50 char']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxLength: [500, 'Name can not be more than 50 char']
    },
    website: {
        type: String,
        match: [
            /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(:\d{1,5})?([\/\w.-]*)*\/?$/i,
            'Please add a valid website'
        ]
    },
    phone: {
        type: String,
        maxLength: [20, 'Phone number can not be longer than 20 characters']
    },
    email: {
        type: String,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please add a valid email'
        ]
    },
    address: {
        type: String,
        required: [true, 'Please add a address']
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            // required: true,
        },
        coordinates: {
            type: [Number],
            // required: true,
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String,
       
    },
    careers: {
        type: [String],
        required: true,
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business'
        ]
    },
    averageRating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [10,'Rating must can not be more than 10']
    },
    averageCost: Number,
    photo: {
        type: String,
        default: 'no-photo.svg'
    },
    housing: {
        type: Boolean,
        default: false
    },

    housing: {
        type: Boolean,
        default: false
    },

    jobAssistance: {
        type: Boolean,
        default: false
    },

    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
})
module.exports = mongoose.model('Bootcamp', BootcampSchema)