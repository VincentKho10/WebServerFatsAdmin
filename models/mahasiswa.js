const mongoose = require('mongoose');

const mahasiswaSchema = new mongoose.Schema({
    nama:{
        type: String,
        required: true
    }, nrp:{
        type: String,
        required: true
    }, password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('mahasiswa', mahasiswaSchema);