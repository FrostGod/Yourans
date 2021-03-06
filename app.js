const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const allViewsRoutes = require('./routes/allViews');
const errorController = require('./controllers/error');

const app = express();



app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req , res , next) => {
    next();
});

app.use(allViewsRoutes);

app.use(errorController.get404);

app.listen(3000);