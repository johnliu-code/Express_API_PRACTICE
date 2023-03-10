const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3000"
};



connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.use('/api/stories', require('./routes/storiesRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);     //Overridr express errorhandler...


app.listen(port, () => console.log(`Server started on port ${port}`));