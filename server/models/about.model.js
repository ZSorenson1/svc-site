const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
    about: {type: String}
})

module.exports.About = mongoose.model('About', AboutSchema);