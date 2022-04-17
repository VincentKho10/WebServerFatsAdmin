const {Schema,mongoose} = require('mongoose');

const kehadiranSchema = new mongoose.Schema({
    jadwal:{
        type: Schema.Types.ObjectId,
        ref: 'agenda',
        required: true
    }, date:{
        type: Date,
        default: Date.now,
        required: false
    }, hadir:{
        type: Boolean,
        default: false,
        required: false
    }
})

module.exports = mongoose.model('kehadiran', kehadiranSchema);