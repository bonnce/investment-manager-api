import express from 'express'
import currency from './routes/currency'
import currencies from './routes/currencies'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/', (_, res) => {
  console.log('ola bro!')
  res.send('Messi es Arquero')
})

app.use('/api/currencies', currencies)
app.use('/api/currency', currency)

app.listen(PORT, () => {
  console.log(`hello ${PORT}`)
})
