const express = require('express')
const app = express();
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const url = require('url')
const port = 3000

//data base connectionie mongodb
require('./db/connection')
mongoose.set('strictQuery', true);

//body parser initialization
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// path setting 
const public_path = path.join(__dirname, '../public')
app.use(express.static(public_path + '/css'))
app.use(express.static(public_path + '/js'))
console.log(__dirname);

//path setting of templates and without ejs extention
let html_path = path.join(__dirname, '../template/views')
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', html_path);

//routing
app.get('/', (req, res) => {
    res.send('hello world')
})


//connection port
app.listen(port, () => {
    console.log(`server listening at port ${port}`);
})





https://preview.themeforest.net/item/pipirima-pizza-food-delivery-elementor-template-kit/full_screen_preview/35202400?_ga=2.154763960.1005821885.1677741502-972441054.1677741502





http://preview.themeforest.net/item/gomoto-food-delivery-wordpress-theme/full_screen_preview/26536818?_ga=2.53005992.1005821885.1677741502-972441054.1677741502