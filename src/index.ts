import express from 'express'
import investments from './routes/investments'
import currencies from './routes/currencies'
import { connectMongoDB } from './misc/mongo'
import cors from 'cors'

const app = express()
app.use(express.json())

const PORT = 8080

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions))

connectMongoDB().catch(err => { console.log(err) })

app.get('/', (_, res) => {
  console.log('ola bro!')
  res.send('Messi es Arquero')
})

app.use('/api/currencies', currencies)
app.use('/api/investments', investments)

app.listen(PORT, () => {
  console.log(`hello ${PORT}`)
})
