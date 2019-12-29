/* train booking detail schema*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Model = new Schema({
    Date:{
        type: String
    },
    Destination:{
        type: String
    },
    Seats:{
        type: String
    },
    Employee:{
        type: String
    },
    Payment:{
        type: String
    },

});

//exporting schema
module.exports = mongoose.model('Model', Model);