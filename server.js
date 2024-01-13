const express = require('express');
const app = express();
const lesson1controller = require('./controllers/lesson1');

app.get('/', lesson1controller.emilyRoute);

app.get('/', lesson1controller.hannaRoute);

const port = 3000
app.listen(process.env.PORT || port);
console.log('Web Server is listening at port ' + (process.env.PORT || port));
