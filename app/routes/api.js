const { getMovieList, getMovie } = require('../helpers/getMovieList');

module.exports = (app) => {

  app.route('/api/movies').get((req, res) => {

    let data = getMovieList();

    if (!data)
      res.send(`Nothing found`);
      
    else
      res.json(data);
  });


  app.route('/api/movie/:name').get((req, res) => {
    let moviename = req.params.name;
    let movieData = getMovie(`${moviename}.json`);

    res.json(JSON.parse(movieData));

  });

}