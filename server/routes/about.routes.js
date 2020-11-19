const AboutController = require('../controllers/about.controller');

module.exports = function(app){
    app.get('/api/about', AboutController.About)
    app.post('/api/about/new', AboutController.createAbout);
    app.put("/api/about/edit", AboutController.editAbout);
}