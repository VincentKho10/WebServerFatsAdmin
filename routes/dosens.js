const express = require('express')
const router = express.Router()
const Dosen = require('../models/dosen')

//Getting all
router.get('/', async (req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    try{
        const dosens = await Dosen.find()
        res.json(dosens)
    }catch(err){
        res.status(500).json({ message: err.message })
    }
})
//Getting one
router.get('/:id', getDosen ,(req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.json(res.dosen)
})
//Creating one
router.post('/', async(req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    const dosen = new Dosen({
        nama: req.body.nama,
        nrp: req.body.nrp,
        password: req.body.password
    });
    try {
        const newDosen = await dosen.save()
        res.status(201).json(newDosen)
    } catch (error) {
        res.status(400).json({ message: err.message })
    }
})
//Updating one
router.patch('/:id', getDosen, async(req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    if(req.body.nama != null){
        res.dosen.nama = req.body.nama
    }if(req.body.nrp != null){
        res.dosen.nrp = req.body.nrp
    }if(req.body.password != null){
        res.dosen.password = req.body.password
    }
    try{
        const updatedDosen = await res.dosen.save()
        res.json(updatedDosen)
    }catch(err){
        res.status(400).json({ message: err.message })
    }
})
//Deleting one

router.delete('/:id', getDosen, async(req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    try {
        await res.dosen.remove()
        res.json({ message: 'Deleted Dosen'})
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

async function getDosen(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    let dosen
    try {
        dosen = await Dosen.findById(req.params.id)
        if(dosen == null){
            return res.status(404).json({ message: "dosen tidak ditemukan" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.dosen = dosen;

    next()
}

module.exports = router