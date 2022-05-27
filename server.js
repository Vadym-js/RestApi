const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 4040;
const path = require('path');
const morgan = require('morgan')
require('dotenv').config();
//IMPORT ROUTES
const postsRoutes = require('./routes/route');


//ROUTES
app.set('view engine', 'ejs');//задаем механизм просмотра EJS
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.urlencoded({extended:false}));
app.use(postsRoutes)

//Connect to DB
async function start() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}...`);
        });
    } catch (ex) {
        console.log('Error: ', ex)
    }
}
start();
