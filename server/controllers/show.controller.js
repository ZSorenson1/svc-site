const { request, response } = require('express');
const { Show } = require('../models/show.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.allShows = (request, response) => {
    Show.find({})
    .then(allShows => response.json(allShows))
    .catch(err => response.json({message: "Something went wrong", error: err}))
}

module.exports.findShow = (request, response) => {
    Show.findOne({_id: request.params.id})
    .then(show => response.json(show))
    .catch(err => response.json({message: "Something went wrong", error: err}))
}

module.exports.createShow = (request, response) => {
    const { venue, city, date, price } = request.body;
    Show.create({
        venue,
        city,
        date,
        price
    })
    .then(show => response.json(show))
    .catch(err => response.json(err));
}

module.exports.editShow = (request, response) => {
    Show.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
    .then(show => response.json(show))
    .catch(err => response.json(err))
}

module.exports.deleteShow = (request, response) => {
    Show.deleteOne({_id: request.params.id})
    .then(res => response.json(res))
    .catch(err => response.json(err))
}