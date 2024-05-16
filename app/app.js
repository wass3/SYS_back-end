const express = require('express');
const morgan = require('morgan');
const userRouter = require('../routes/userRoutes');
const planRouter = require('../routes/planRoutes');
const followersRouter = require('../routes/followersRoutes');
const user_planRouter = require('../routes/user_planRoutes');
const app = express();


app.use(express.json());
app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log('Hello World!');
});

app.use('/api/user', userRouter);
app.use('/api/plan', planRouter);
app.use('/api/followers', followersRouter);
app.use('/api/user_plan', user_planRouter);

module.exports = app;