const {Schema,mongoose} = require('mongoose');

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
        type: Schema.Types.ObjectId,
        ref: 'kelas',
        required: true
    },
    waktu: {
        type: String,
        required: true
    },
    dosen: {
        type: Schema.Types.ObjectId,
        ref: 'dosen',
        required: true
    },
    mahasiswas: [{
        type: Schema.Types.ObjectId,
        ref: 'mahasiswa',
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
        required: false
    },
    ruang: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: false
    },
})

jadwalSchema.index({semester: 1, kode_mk: 1, kelas: 1}, {unique: true});

module.exports = mongoose.model('jadwal', jadwalSchema)