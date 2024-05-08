const express = require('express');
const morgan = require('morgan');
const userRouter = require('../routes/userRoutes');
const app = express();

app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/user', userRouter);


module.exports = app;