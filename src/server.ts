import express from 'express'
import 'express-async-errors'
import routes from './routes'
import cors from 'cors'
import path from 'path'
import './database/connection'
import errorHandle from './errors/handle'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandle)


app.listen(3333)