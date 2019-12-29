/* backend file for payment details*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const paymentRoutes = express.Router();
const PORT = 3001;

let Payment = require('./paymentmodel');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/payments', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function(){
    console.log("Mongo db connection success");
})

paymentRoutes.route('/').get(function (req, res) {
    Payment.find(function (err, payments) {
        if(err){
            console.log(err);
        }else{
            res.json(payments);
        }
    });
});

paymentRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Payment.findById(id, function (err, payment) {
        res.json(payment);
    });
});

//POST to the mongodb database.
paymentRoutes.route('/add').post(function (req, res) {
    let payment = new Payment(req.body);
    payment.save().then(payment => {
        res.status(200).json({'payment': 'payment successfully added'});//checking added or not.
    }).catch(err => {
        req.status(400).send('payment adding failed');
    });
});

// Delete from db
paymentRoutes.route('/delete/:id').post(function (req, res) {
    Payment.findById(req.params.id, function (err, payment) {
        if(!payment) {
            req.status(404).send('Data not found');//checking the db
        }
        else {

            payment.splice().then(payment => {
                res.json('Datas Dleted');
            })
                .catch(err => {
                    res.status(400).send('Data not deletd');
                });
        }

    } )
})

//updating the database
paymentRoutes.route('/update/:id').post(function (req, res) {
    Payment.findById(req.params.id, function (err, payment) {
        if(!payment) {
            req.status(404).send('Data not found');//checking the db
        }
        else {
            //updating values to the database
            payment.Date = req.body.Date;
            payment.Destination = req.body.Destination;
            payment.Seats = req.body.Seats;
            payment.Employee = req.body.Employee;
            payment.Payment = req.body.Payment;

            payment.save().then(payment => {
                res.json('Datas Updated');
            })
                .catch(err => {
                    res.status(400).send('Database not updated');
                });
        }

    } )
})

app.use('/payments', paymentRoutes);

//listening to the port 3001
app.listen(PORT, function() {
    console.log("Server running Port: " + PORT);

})
