const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    roles: [String],
    gstNumber: String,
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', UserSchema);
