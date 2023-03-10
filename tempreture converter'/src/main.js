const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const ejs = require('ejs')
const path = require('path')
const port = 3000;


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
    res.render('index', { result: '0' })
})
app.post('/', (req, res) => {

    const value = Number(req.body.value)
    const to_degree = req.body.to_degree
    const from_degree = req.body.from_degree
    console.log(from_degree);


    // calculation part
    if (from_degree == 'f' && to_degree == 'c') {
        const farcel = (value - 32) * 5 / 9
        console.log(farcel)
        const result = farcel.toFixed(2) +'   '+ '°' + to_degree
        res.render('index', { result: result })

    }
    else if (from_degree == 'c' && to_degree == 'f') {
        const celfar = (9 / 5) * value + 32
        const result = celfar.toFixed(2) +'   '+ '°' +'   '+ to_degree

        res.render('index', { result: result })
    }
    else if (from_degree == 'c' && to_degree == 'k') {
        const celkel = value + 273.15;
        const result = celkel.toFixed(2) +'      '+ to_degree

        res.render('index', { result: result })


    }
    else if (from_degree == 'k' && to_degree == 'c') {
        const kelcel = value - 273.15
        const result = kelcel.toFixed(2) +'   '+ '°' +'   '+ to_degree

        res.render('index', { result: result })

        console.log(kelcel);

    }
    else if (from_degree == 'k' && to_degree == 'f') {
        const kelfar = (value - 273.15) * 9 / 5 + 32
        const result = kelfar.toFixed(2) +'   '+ '°' +'   '+ to_degree

        res.render('index', { result: result })

        console.log(kelfar);

    }
    else if (from_degree == 'f' && to_degree == 'k') {
        const farkel = (value - 32) * 5 / 9 + 273.15
        const result = farkel.toFixed(2) +'      '+ to_degree

        res.render('index', { result: result })

        console.log(farkel);
    }
    else if (from_degree == 'c' && to_degree == 'c') {
        res.render('index', { result: value +'   '+ '°' +'   '+ to_degree })
    }
    else if (from_degree == 'f' && to_degree == 'f') {
        res.render('index', { result: value +'   '+ '°' +'   '+ to_degree })
    }
    else if (from_degree == 'k' && to_degree == 'k') {

        res.render('index', { result: value +'     '+ to_degree })
    }
    else {
        res.render('index', { result: 'somthing wrong....!' })
    }

})

app.listen(port, () => {
    console.log(`server listening at port ${port}`);
})
