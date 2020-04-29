const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());
mongoose.connect('mongodb+srv://test:test@cluster0-thmbr.mongodb.net/TeamvoyTask?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const pokemonRouter = require('./routes/pokemon');

app.use('/api/pokemon', pokemonRouter);
app.use('/uploads', express.static('uploads'));
app.use(express.static(path.join(__dirname, 'uploads')));


app.get('/', (req, res, next) => {
    res.end('GOOD!!!')
});

app.use('*', (req, res) => {
    res.status(404).json('Page not found!!!!!!!!');
});

app.listen(3000, () => {
    console.log('CONNECTED!!');
});
