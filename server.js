const express = require('express');
const path = require('path');
const next = require('next');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev })
const handle = app.getRequestHandler();
const server = express();

let apiRoutes = require('./api/movielist');

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

app.prepare().then(() => {
  server.get('*', (req, res) => {
    return handle(req, res)
  });
});

server.use('/api', apiRoutes);

server.listen(port, (err) => {
  if (err) throw err
  console.log(`Ready on http://localhost:${port}`)
})