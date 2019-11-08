const { getMovieList, getMovie } = require('../helpers/getMovieList');

module.exports = (app) => {

  app.route('/movies').get((req, res) => {

    let movieList = getMovieList();

    console.log('MovieList: ', movieList);

    if (!movieList || movieList.length === 0)
      res.send(`Nothing found`);

    else
      res.json(movieList);
  });


  app.route('/movie/:name').get((req, res) => {
    let moviename = req.params.name;
    let movieData = getMovie(`${moviename}.json`);

    res.json(JSON.parse(movieData));

  });

}