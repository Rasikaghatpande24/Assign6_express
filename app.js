const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./Router/index');


const app = express();


const port = 5066;
const host = 'localhost';
//const dbUrl = 'mongodb://127.0.0.1:27017/zomato_17';
const serverDBURL = 'mongodb+srv://zm_clone_user:Zm123456@cluster0.5vatg.mongodb.net/Zm_db?retryWrites=true&w=majority';


app.use(cors);
app.options('*', cors);
app.use('/', router);


mongoose.connect(serverDBURL)
    .then(res => {
        app.listen(port, host, () => {
            console.log(`Server is running on ${host}: ${port}`)
        });
    })
    .catch(err => console.log(err));