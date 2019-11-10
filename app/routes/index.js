const MovieList = require('./api');
const Index = require('./app');

module.exports = function (app) {
  MovieList(app);
  Index(app);
};