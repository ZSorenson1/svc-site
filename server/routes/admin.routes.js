const AdminController = require('../controllers/admin.controller');
const { authenticate } = require('../config/jwt.config');
module.exports = function(app){
    app.get('/api/admin/all', authenticate, AdminController.allAdmins)
    app.post('/api/admin/new', AdminController.createAdmin);
    app.post("/api/admin/login", AdminController.loginAdmin);
    app.post('/api/admin/logout', AdminController.logoutAdmin)
}