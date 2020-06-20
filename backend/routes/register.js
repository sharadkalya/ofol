const express = require("express");
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
    res.json({
        message: "register endpoint in progress"
    });
});

router.post('/', async (req, res) => {
    const first = req.body.first;
    const last = req.body.last;
    const mobileNumber = req.body.mobileNumber;
    const roles = req.body.roles || [];
    const password = req.body.password;
    const gstNumber = req.body.gstNumber

    const requiredFields = first && last && mobileNumber && password;

    if (!requiredFields) {
        res.json({
            error: 'Please fill all mandatory fields'
        });
        return;
    }

    if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
        res.json({
            error: 'Invalid mobile number'
        });
        return;
    }

    if (password.length < 5) {
        res.json({
            error: 'Password length should be minimum 5'
        });
        return;
    }

    roles.push('endUser');
    const user = new User({
        first,
        last,
        mobileNumber,
        roles,
        password,
        gstNumber
    });

    try {
        const isExistingUser = await User.exists({ mobileNumber });

        if (isExistingUser) {
            res.json({
                error: 'Mobile number already in use'
            });
            return;
        }

        result = await user.save();
        res.json({
            result
        });
    } catch (error) {
        res.json({
            error: 'Connection to DB failed'
        });
    }
})

module.exports = router;
