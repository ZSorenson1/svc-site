const ShowController = require('../controllers/show.controller');

module.exports = function(app){
    app.get('/api' , ShowController.index);
    app.get('/api/shows', ShowController.allShows);
    app.get('/api/shows/:id', ShowController.findShow);
    app.put('/api/shows/:id/edit', ShowController.editShow);
    app.delete('/api/shows/:id/delete', ShowController.deleteShow);
    app.post('/api/shows/new', ShowController.createShow);
}