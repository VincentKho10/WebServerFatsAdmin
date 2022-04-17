require('dotenv').config()

const express= require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const dosenRouter = require('./src/controller/dosens')
const mahasiswaRouter = require('./src/controller/mahasiswas')
const userRouter = require('./src/controller/users')
const jadwalRouter = require('./src/controller/jadwals')
const kehadiranRouter = require('./src/controller/kehadirans')

app.use('/dosen', dosenRouter)
app.use('/mahasiswa', mahasiswaRouter)
app.use('/user', userRouter)
app.use('/jadwal', jadwalRouter)
app.use('/kehadiran', kehadiranRouter)

//api sect


const adminRouter = require('./src/index')
app.use('/admin', adminRouter)

app.listen(process.env.PORT || 1337, () => console.log('Server Started'))