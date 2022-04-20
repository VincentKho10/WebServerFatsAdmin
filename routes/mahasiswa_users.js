const express = require('express')
const router = express.Router()
const User = require('../models/mahasiswa_user')

//Getting all
router.get('/', async (req, res)=>{
    try{
        const users = await User.find()
        res.json(users)
    }catch(err){
        res.status(500).json({ message: err.message })
    }
})

//Getting one
router.get('/:id', getDosen ,(req, res)=>{
    res.json(res.user)
})

//Creating one
router.post('/', async(req, res)=>{
    var newmhs = new Map(JSON.parse(req.body.mahasiswa))
    const user = new User({
        mahasiswa: newmhs,
        mac_address: req.body.mac_address
    });
    try {
        console.log(user)
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ message: err.message })
    }
})

//Updating one
router.patch('/:id', getDosen, async(req, res)=>{
    if(req.body.mahasiswa != null){
        res.user.mahasiswa = req.body.mahasiswa
    }if(req.body.mac != null){
        res.user.mac_address = req.body.mac_address
    }
    try{
        const updatedDosen = await res.user.save()
        res.json(updatedDosen)
    }catch(err){
        res.status(400).json({ message: err.message })
    }
})

//Deleting one
router.delete('/:id', getDosen, async(req, res)=>{
    try {
        await res.user.remove()
        res.json({ message: 'Deleted User'})
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

async function getDosen(req,res,next) {
    let user
    try {
        user = await User.findById(req.params.id)
        if(user == null){
            return res.status(404).json({ message: "user tidak ditemukan" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.user = user;

    next()
}

module.exports = router