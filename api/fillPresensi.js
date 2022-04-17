router.patch('/:id', getDosen, async(req, res)=>{
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

async function getKehadiran(req,res,next) {
    let kehadiran
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