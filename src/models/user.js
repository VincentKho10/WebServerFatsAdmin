const {Schema,mongoose} = require('mongoose');

const userSchema = new mongoose.Schema({
    mahasiswa:{
        type: Schema.Types.ObjectId,
        ref: 'mahasiswa',
        required: true,
        unique: true,
    }, mac_address:{
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('mahasiswa_user', userSchema);