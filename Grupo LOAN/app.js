const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

// Routes
const mainRuta = require('./routes/main.routes');

// Middlewares
app.use('/', mainRuta);
app.use('/servicios', mainRuta);
app.use('/contacto', mainRuta);

const port = 3000; 
app.listen(port, () => console.log(`App running on port ${port}.`));