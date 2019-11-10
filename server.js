const express = require('express');
const bodyParser = require('body-parser');
const reactEngine = require('express-react-views');

const app = express();
const port = 8000;

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine.createEngine());

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

require('./app/routes/index.js')(app);

app.listen(port, () => { console.log('We are live on ' + port); });