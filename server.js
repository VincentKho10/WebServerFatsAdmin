require('dotenv').config()

const express= require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(bodyParser.json());
app.use(cors());

app.use(express.json())

const dosenRouter = require('./routes/dosens')
app.use('/dosen', cors(), dosenRouter)

const mahasiswaRouter = require('./routes/mahasiswas')
app.use('/mahasiswa', cors(), mahasiswaRouter)

const userRouter = require('./routes/mahasiswa_users')
app.use('/user', cors(), userRouter)

const jadwalRouter = require('./routes/jadwals')
app.use('/jadwal', cors(), jadwalRouter)

const kehadiranRouter = require('./routes/kehadirans')
app.use('/kehadiran', cors(), kehadiranRouter)

app.listen(process.env.PORT || 1337, () => console.log('Server Started'))