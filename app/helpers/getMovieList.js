import path from 'path';
import fs from 'fs';

function getMovieList() {

  const trailersPath = path.join('./app/movies');
  return fs.readdirSync(trailersPath);

}

function getMovie(name) {

  const trailersPath = path.join(`./app/movies/${name}.json`);
  return fs.readFileSync(trailersPath, 'UTF-8');
}

export {
  getMovieList,
  getMovie
}