const { request, response } = require('express');
const { About } = require('../models/about.model');


module.exports.About = (request, response) => {
    About.findOne({_id: "5fb42e38e8c0cb044818ac03"})
    .then(about => response.json(about))
    .catch(err => response.json({message: "Something went wrong", error: err}))
}


module.exports.createAbout = (request, response) => {
    const { about } = request.body;
    About.create({
        about
    })
    .then(about => response.json(about))
    .catch(err => response.json(err));
}

module.exports.editAbout = (request, response) => {
    About.findOneAndUpdate({_id: "5fb42e38e8c0cb044818ac03"}, request.body, {new: true})
    .then(about => response.json(about))
    .catch(err => response.json(err))
}