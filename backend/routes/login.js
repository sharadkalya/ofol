const User = require('../models/User');

const login = (req, res) => {
    const mobileNumber = req.body.mobileNumber;
    const password = req.body.password;

    if (!mobileNumber || !password) {
        res.json({
            error: 'Mobile number and password must not be empty'
        });
        return;
    }

    if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
        res.json({
            error: 'Invalid mobile number'
        });
        return;
    }

    User.findOne({ mobileNumber, password }, (error, result) => {
        if (error) {
            res.json({
                error
            });
            return;
        }

        if (result) {
            res.json({
                ...result['_doc']
            });
        } else {
            res.json({
                error: 'Incorrect mobile number or password'
            });
        }

        return;
    });
};

module.exports = login;
