const express = require('express')
const router = express.Router()
const Mahasiswa = require('../models/mahasiswa')

//Getting all
router.get('/', async (req, res)=>{
    try{
        const mahasiswas = await Mahasiswa.find()
        res.json(mahasiswas)
    }catch(err){
        res.status(500).json({ message: err.message })
    }
})
//Getting one
router.get('/:id', getDosen ,(req, res)=>{
    res.json(res.mahasiswa)
})
//Creating one
router.post('/', async(req, res)=>{
    const mahasiswa = new Mahasiswa({
        nama: req.body.nama,
        nrp: req.body.nrp,
        password: req.body.password
    });
    try {
        const newDosen = await mahasiswa.save()
        res.status(201).json(newDosen)
    } catch (error) {
        res.status(400).json({ message: err.message })
    }
})
//Updating one
router.patch('/:id', getDosen, async(req, res)=>{
    if(req.body.nama != null){
        res.mahasiswa.nama = req.body.nama
    }if(req.body.nrp != null){
        res.mahasiswa.nrp = req.body.nrp
    }if(req.body.password != null){
        res.mahasiswa.password = req.body.password
    }
    try{
        const updatedDosen = await res.mahasiswa.save()
        res.json(updatedDosen)
    }catch(err){
        res.status(400).json({ message: err.message })
    }
})
//Deleting one

router.delete('/:id', getDosen, async(req, res)=>{
    try {
        await res.mahasiswa.remove()
        res.json({ message: 'Deleted Mahasiswa'})
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

async function getDosen(req,res,next) {
    let mahasiswa
    try {
        mahasiswa = await Mahasiswa.findById(req.params.id)
        if(mahasiswa == null){
            return res.status(404).json({ message: "mahasiswa tidak ditemukan" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.mahasiswa = mahasiswa;

    next()
}

module.exports = router