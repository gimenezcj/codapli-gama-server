const express = require('express');
const app = express();
const morgan = require('morgan');
var cors = require('cors');

// settings

app.set('port', process.env.PORT || 3000);
app.set('json spaces',2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

// routes
app.use('/api',require('./routes/'));

// iniciando el servidor
app.listen(app.get('port'),() => {
	console.log(`Servidor en el puerto: ${app.get('port')}`);
});