const mongoose = require('mongoose');

const ShowSchema = new mongoose.Schema({
    venue: { type: String},
    city: { type: String },
    date: { type: Date },
    price:{ type: String }
}, { timestamps: true });

module.exports.Show = mongoose.model('Show', ShowSchema);