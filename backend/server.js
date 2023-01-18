const express = require('express');
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
require('dotenv').config();
const goals = require('./routes/goals');
const users = require('./routes/users');
const connectDB = require('./config/db');
const { protect } = require('./middleware/authMiddleware');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', protect);
app.use('/api/goals', goals);
app.use('/api/users', users);
app.use(errorHandler);

app.listen(port, () => console.log(`server running on port ${port}`));
