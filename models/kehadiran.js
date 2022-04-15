const mongoose = require('mongoose');
const jadwalmod = require('./jadwal');

const kehadiranSchema = new mongoose.Schema({
    jadwal:{
        type: Map,
        of: jadwalmod.jadwalSchema,
        required: true
    }, date:{
        type: Date,
        default: Date.now,
        required: true
    }
})

module.exports = mongoose.model('kehadiran', kehadiranSchema);