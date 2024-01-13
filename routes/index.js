const routes = require('express').Router();
const lesson1controller = require('../controllers/lesson1');

routes.get('/', lesson1controller.sarahRoute);
routes.get('/emily', lesson1controller.emilyRoute);

routes.get('/hannah', lesson1controller.hannahRoute);

module.exports = routes;