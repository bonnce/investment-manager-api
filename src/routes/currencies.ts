import express from 'express'
import * as currencyServices from '../services/currencies'
import { validateCurrencyEntry } from '../misc/utils'

const router = express.Router()

router.get('/', (_, res) => {
  void currencyServices.getAllCurrencies().then(curr =>
    res.send(curr)
  )
})

router.post('/', (req, res) => {
  try {
    const currencyEntry = validateCurrencyEntry(req.body)
    void currencyServices.addCurrency(currencyEntry).then(curr => {
      res.send(curr)
    })
  } catch (e) {
    const { message } = e as Error
    res.status(400).send(message)
  }
})

export default router
