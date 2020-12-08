const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const todos = require('./api/todos');

const app = express();

mongoose.connect(process.env.DATABASE_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true 
},() => {
    console.log("Connected to DATABASE");
});

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "Hello World!"
    });
});

app.use('/api/todos', todos);

app.use(middlewares.notFound)
app.use(middlewares.errorHandler);



const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})