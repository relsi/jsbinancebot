const express = require('express');
require('express-async-errors');

const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const authMiddleware = require('./middlewares/authMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
const authController = require('./controllers/authController');
const settingsController = require('./controllers/settingsController');

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.use(helmet());

app.use(express.json());

app.use(morgan('dev'));

app.post('/login', authController.doLogin);

app.get('/settings', authMiddleware, settingsController.getSettings);

app.patch('/settings', authMiddleware, settingsController.updateSettings);

app.post('/logout', authController.doLogout);

app.use('/', (req, res, next) => {
    res.send('Hello World');
})

app.use(errorMiddleware);

module.exports = app;