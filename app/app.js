const express = require('express');
const morgan = require('morgan');
const userRouter = require('../routes/userRoutes');
const planRouter = require('../routes/planRoutes');
const app = express();


app.use(express.json());
app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log('Hello World!');
});

app.use('/api/user', userRouter);
app.use('/api/plan', planRouter);


module.exports = app;