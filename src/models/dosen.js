const mongoose = require('mongoose');

const dosenSchema = new mongoose.Schema({
    nama:{
        type: String,
        required: true
    }, nrp:{
        type: String,
        required: true,
        unique:true
    }, password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('dosen', dosenSchema)