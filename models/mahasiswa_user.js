const mongoose = require('mongoose');
const mahasiswa = require('./mahasiswa');

const userSchema = new mongoose.Schema({
    mahasiswa:{
        type: Map,
        of: mahasiswa.mahasiswaSchema,
        required: true
    }, mac_address:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('mahasiswa_user', userSchema);