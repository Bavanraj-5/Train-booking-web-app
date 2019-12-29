/* customer payment detail schema*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Payment = new Schema({
    Name:{
        type: String
    },
    Amount:{
        type: String
    },
    Phone:{
        type: String
    },
    Pin:{
        type: String
    },
    Payment:{
        type: String
    },
    Email:{
        type: String
    },
    CreditNo:{
        type: String
    },
    Cvc:{
        type: String
    },

});

//exporting schema
module.exports = mongoose.payment('Payment', Payment);
