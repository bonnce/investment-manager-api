import express from 'express'
import investments from './routes/investments'
import currencies from './routes/currencies'
import { connectMongoDB } from './misc/mongo'

const app = express()
app.use(express.json())

const PORT = 3000

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
