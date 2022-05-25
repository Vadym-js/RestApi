const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
//IMPORT ROUTES
const postsRoutes = require('./routes/route');

//ROUTES
app.use(postsRoutes)


app.set('view engine', 'ejs');//задаем механизм просмотра EJS

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    ()=> console.log("Connected to DB!"));
app.listen(4040);
console.log("Port 4040 is started...");