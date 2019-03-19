
const homeController = require('./../app/controllers/homeController');
const adminController = require('./../app/controllers/adminController');


let configRoutes = (app)=> {
    homeController.Register(app);
    adminController.Register(app);
};

module.exports = configRoutes;


