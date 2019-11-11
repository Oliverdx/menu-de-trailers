const { getMovieList, getMovie } = require('../helpers/getMovieList');

module.exports = (app) => {

    app.route('/').get((req, res) => {
        let data = getMovieList();
        res.render('index', { title: 'Menu de Filmes', data: data });
    });

    app.route('/movie/:name').get((req, res) => {
        let movie = req.params.name;
        let movieData = JSON.parse(getMovie(movie + '.json'));
        res.render('moviepage', { title: movie.replace(/-/g, ' ').toUpperCase(), data: movieData })
    });

    app.route('/trailer/:name').get((req, res) => {
        let movie = req.params.name;

        res.render('trailer', {
            title: movie.replace(/-/g, ' ').toUpperCase(),
            trailerURL: `/trailers/${movie}.mov` 
        });
    });
}