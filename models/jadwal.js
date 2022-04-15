const mongoose = require('mongoose');
const Mahasiswa = require('./mahasiswa');
const Dosen = require('./dosen');

const jadwalSchema = new mongoose.Schema({
    program_studi: {
        type: String,
        required: true
    },
    mata_kuliah: {
        type: String,
        required: true
    },
    kelas: {
        type: String,
        required: true
    },
    waktu: {
        type: String,
        required: true
    },
    dosen: {
        type: Map,
        of: Dosen.dosenSchema,
        required: true
    },
    mahasiswas: [{
        type: Map,
        of: Mahasiswa.mahasiswaSchema,
        required: false
    }],
    semester: {
        type: String,
        required: true
    },
    kode_mk: {
        type: String,
        required: true
    },
    jumlah_mahasiswa: {
        type: String,
        required: true
    },
    ruang: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
})

module.exports = mongoose.model('jadwal', jadwalSchema);