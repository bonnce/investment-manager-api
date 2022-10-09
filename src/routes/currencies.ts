import express from 'express'
import * as currencyServices from '../services/currencies'
import validateCurrencyEntry from '../utils'

const router = express.Router()

router.get('/', (_, res) => {
  const currencies = currencyServices.getAllCurrencies()
  res.send(currencies)
})

router.post('/', (req, res) => {
  try {
    // console.log(Array.isArray(req.body.shopping))
    const currencyEntry = validateCurrencyEntry(req.body)
    const currencyAdded = currencyServices.addCurrencies(currencyEntry)
    res.send(currencyAdded)
  } catch (e) {
    const { message } = e as Error
    res.status(400).send(message)
  }
})

export default router
