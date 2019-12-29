/* backend file for booking details*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const modelRoutes = express.Router();
const PORT = 3001;

//connecting to the schema file
let Model = require('./model');

app.use(cors());
app.use(bodyParser.json());

//connecting to the database collection.
mongoose.connect('mongodb://127.0.0.1:27017/models', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function(){
    console.log("Mongo db connection success");
})

modelRoutes.route('/').get(function (req, res) {
    Model.find(function (err, models) {
        if(err){
            console.log(err);
        }else{
            res.json(models);
        }
    });
});

modelRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Model.findById(id, function (err, model) {
        res.json(model);
    });
});

//POST data to the mongodb database.
modelRoutes.route('/add').post(function (req, res) {
    let model = new Model(req.body);
    model.save().then(model => {
        res.status(200).json({'model': 'model successfully added'});//checking added or not.
    }).catch(err => {
        req.status(400).send('model adding failed');
    });
});

//updating the database
modelRoutes.route('/update/:id').post(function (req, res) {
    Model.findById(req.params.id, function (err, model) {
        if(!model) {
            req.status(404).send('Data not found');//checking the db
        }
        else {
            //updating values to the database
            model.Date = req.body.Date;
            model.Destination = req.body.Destination;
            model.Seats = req.body.Seats;
            model.Employee = req.body.Employee;
            model.Payment = req.body.Payment;

            model.save().then(model => {
                res.json('Datas Updated');
            })
                .catch(err => {
                    res.status(400).send('Database not updated');
                });
        }

    } )
})

// Delete from db
modelRoutes.route('/delete/:id').post(function (req, res) {
    Model.findById(req.params.id, function (err, model) {
        if(!model) {
            req.status(404).send('Data not found');//checking the db
        }
        else {

            model.splice().then(model => {
                res.json('Datas Dleted');
            })
                .catch(err => {
                    res.status(400).send('Data not deletd');
                });
        }

    } )
})

app.use('/models', modelRoutes);

//listening to the port 3001
app.listen(PORT, function() {
    console.log("Server running Port: " + PORT);

})
