const path = require('path')
const fs = require('fs');

function getMovieList() {

  const trailersPath = path.join(path.dirname(__dirname), './public/movies');
  return fs.readdirSync(trailersPath);

}

function getMovie(name) {

  const trailersPath = path.join(path.dirname(__dirname), './public/movies/', name);
  return fs.readFileSync(trailersPath, 'utf8');
}

module.exports = {
  getMovieList,
  getMovie
}