const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/svcdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("established connection to db"))
.catch(err => console.log("Something went wrong while connecting to db", err));