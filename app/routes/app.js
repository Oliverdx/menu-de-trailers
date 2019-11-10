const axios = require('axios');

module.exports = (app) => {

    app.route('/').get((req, res) => {

        axios.get('http://localhost:8000/api/movies').then(response => {
            let data = response.data;
            res.render('index', { title: 'Menu de Filmes', data: data });
        });

    });
}