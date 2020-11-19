const { Admin } = require('../models/admin.model');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


module.exports.createAdmin = (request, response) => {
    Admin.create(request.body)
    .then(admin => response.json(admin))
    .catch(err => response.json(err));
}

module.exports.allAdmins = (request, response) => {
    Admin.find({})
    .then(allAdmins => response.json(allAdmins))
    .catch(err => response.json({message: "Something went wrong", error: err}))
}

module.exports.loginAdmin = async(req, res) => {
    const admin = await Admin.findOne({ username: req.body.username });
    if(admin === null) {
        return res.sendStatus(400);
    }
    const correctPassword = await bcrypt.compare(req.body.password, admin.password);

    if(!correctPassword) {
        return res.sendStatus(400);
    }
    
    const adminToken = jwt.sign({
        id: admin._id
    }, process.env.SECRET_KEY);

        res
            .cookie("admintoken", adminToken, process.env.SECRET_KEY, {
                httpOnly: true
            })
            .json({ msg: "success!" })
}

module.exports.logoutAdmin = (req, res) => {
    res.clearCookie('admintoken');
    res.sendStatus(200);
}