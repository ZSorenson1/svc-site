const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const AdminSchema = new mongoose.Schema({
    username: { type: String},
    password: { type: String}
}, { timestamps: true });

AdminSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    });
});

module.exports.Admin = mongoose.model('Admin', AdminSchema);