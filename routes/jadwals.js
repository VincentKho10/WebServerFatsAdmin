const express = require('express')
const router = express.Router()
const Jadwal = require('../models/jadwal')

//Getting all
router.get('/', async (req, res)=>{
    try{
        const jadwals = await Jadwal.find()
        res.json(jadwals)
    }catch(err){
        res.status(500).json({ message: err.message })
    }
})

//Getting one
router.get('/:id', getJadwal ,(req, res)=>{
    res.json(res.jadwal)
})

//Creating one
router.post('/', async(req, res)=>{
    const jadwal = new Jadwal({
        program_studi: req.body.program_studi,
        mata_kuliah: req.body.mata_kuliah,
        kelas: req.body.kelas,
        waktu: req.body.waktu,
        dosen: req.body.dosen,
        mahasiswas: req.body.mahasiswas,
        semester: req.body.semester,
        kode_mk: req.body.kode_mk,
        jumlah_mahasiswa: req.body.jumlah_mahasiswa,
        ruang: req.body.ruang,
        active: req.body.active
    });
    try {
        const newUser = await jadwal.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ message: err.message })
    }
})

//Updating one
router.patch('/:id', getJadwal, async(req, res)=>{
    if(req.body.program_studi != null){
        res.jadwal.program_studi = req.body.program_studi
    }if(req.body.mata_kuliah != null){
        res.jadwal.mata_kuliah = req.body.mata_kuliah
    }if(req.body.kelas != null){
        res.jadwal.kelas = req.body.kelas
    }if(req.body.waktu != null){
        res.jadwal.waktu = req.body.waktu
    }if(req.body.dosen != null){
        res.jadwal.dosen = req.body.dosen
    }if(req.body.mahasiswas != null){
        res.jadwal.mahasiswas = req.body.mahasiswas
    }if(req.body.semester != null){
        res.jadwal.semester = req.body.semester
    }if(req.body.kode_mk != null){
        res.jadwal.kode_mk = req.body.kode_mk
    }if(req.body.jumlah_mahasiswa != null){
        res.jadwal.jumlah_mahasiswa = req.body.jumlah_mahasiswa
    }if(req.body.ruang != null){
        res.jadwal.ruang = req.body.ruang
    }if(req.body.active != null){
        res.jadwal.active = req.body.active
    }
    try{
        const updatedDosen = await res.jadwal.save()
        res.json(updatedDosen)
    }catch(err){
        res.status(400).json({ message: err.message })
    }
})

//Deleting one
router.delete('/:id', getJadwal, async(req, res)=>{
    try {
        await res.jadwal.remove()
        res.json({ message: 'Deleted Jadwal'})
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

async function getJadwal(req,res,next) {
    let jadwal
    try {
        jadwal = await Jadwal.findById(req.params.id)
        if(jadwal == null){
            return res.status(404).json({ message: "jadwal tidak ditemukan" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.jadwal = jadwal;

    next()
}

module.exports = router