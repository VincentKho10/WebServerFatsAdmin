const express = require('express')
const router = express.Router()
const Kehadiran = require('../models/kehadiran')

//Getting all
router.get('/', async (req, res)=>{
    try{
        const jadwals = await Kehadiran.find()
        res.json(jadwals)
    }catch(err){
        res.status(500).json({ message: err.message })
    }
})

//Getting one
router.get('/:id', getJadwal ,(req, res)=>{
    res.json(res.kehadiran)
})

//Creating one
router.post('/', async(req, res)=>{
    const kehadiran = new Kehadiran({
        jadwal: req.body.jadwal,
        date: req.body.date
    });
    try {
        const newKehadiran = await kehadiran.save()
        res.status(201).json(newKehadiran)
    } catch (error) {
        res.status(400).json({ message: err.message })
    }
})

//Updating one
router.patch('/:id', getJadwal, async(req, res)=>{
    if(req.body.jadwal != null){
        res.kehadiran.jadwal = req.body.jadwal
    }if(req.body.date != null){
        res.kehadiran.date = req.body.date
    }try{
        const updatedKehadiran = await res.kehadiran.save()
        res.json(updatedKehadiran)
    }catch(err){
        res.status(400).json({ message: err.message })
    }
})

//Deleting one
router.delete('/:id', getJadwal, async(req, res)=>{
    try {
        await res.kehadiran.remove()
        res.json({ message: 'Deleted Kehadiran'})
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

async function getJadwal(req,res,next) {
    let kehadiran
    try {
        kehadiran = await Kehadiran.findById(req.params.id)
        if(kehadiran == null){
            return res.status(404).json({ message: "kehadiran tidak ditemukan" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.kehadiran = kehadiran;

    next()
}

module.exports = router