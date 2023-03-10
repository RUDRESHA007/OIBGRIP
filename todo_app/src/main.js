const express = require('express')
const app = express();
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const url = require('url')
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

//dynamiclly pass data using ejs
let html_path = path.join(__dirname, '../template/views')
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', html_path);

app.get('/', (req, res) => {
    const db = mongoose.connection;

    db.collection('todo_data').find().toArray((err, result) => {
        if (err) throw err;

        res.render('index', { msg: '', result: result })

    });
})
app.post('/', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const db = mongoose.connection;

    if (title.length == 0) {
        db.collection('todo_data').find().toArray((err, result) => {
            if (err) throw err;

            res.render('index', { msg: 'title field is empty', result: result })

        });
    }

    else if (description.length == 0) {
        db.collection('todo_data').find().toArray((err, result) => {
            if (err) throw err;
            res.render('index', { msg: 'description field  is empty', result: result })
        });
        console.log(title.length);
    }
    else {
        const dates = new Date();
        const date = dates.getDate()
        const month = dates.getMonth() + 1
        const year = dates.getFullYear()
        // console.log();
        const time = date + '/' + month + '/' + year
        // console.log('added');
        const data = {
            'title': title,
            'discription': description,
            'date': time

        }
        db.collection('todo_data').insertOne(data, (err, result) => {
            db.collection('todo_data').find().toArray((err, result) => {
                if (err) throw err;
                res.render('index', { msg: 'added successfully', result: result })
            });
            if (err) throw err;
        });
    }
    // res.redirect('/')
})
app.get('/delete', (req, res) => {
    const db = mongoose.connection;
    const queryObject = url.parse(req.url, true).query;
    id = queryObject.id
    console.log(queryObject);
    const title_id = mongoose.Types.ObjectId(id);//convert string to objectid
    // const id = `ObjectId(${dltid})`
    db.collection('todo_data').deleteOne({ '_id': title_id }, (err, r) => {

        db.collection('todo_data').find().toArray((err, result) => {

            if (err) throw err;
            res.render('index', { msg: 'deleted', result: result })
        });
        console.log(r);
    });
})
app.get('/edit', (req, res) => {
    const db = mongoose.connection;
    const queryObject = url.parse(req.url, true).query;
    const id = queryObject.id
    const title_id = mongoose.Types.ObjectId(id);//convert string to objectid

    // console.log(titles);
    db.collection('todo_data').find({ _id: title_id }).toArray((err, result) => {

        if (err) throw err;
        res.render('edit', { result: result })
    });
});

app.get('/saved', (req, res) => {
    const db = mongoose.connection;

    const id = req.query.id
    const title_id = mongoose.Types.ObjectId(id);//convert string to objectid

    const title = req.query.title
    const description = req.query.description
    console.log(title_id);
    const updated_data =
    {

        'title': title,
        'discription': description

    }

    // const id = `ObjectId(${dltid})`
    db.collection('todo_data').updateMany({ _id: title_id }, { $set: updated_data }, { multi: true }, function (err, result) {
        if (err) { throw err; }

        console.log(result);
        console.log(updated_data);

        res.redirect('/')

    });
});
// })

app.listen(3000, (req, res) => {

    console.log('connected 3000');
})