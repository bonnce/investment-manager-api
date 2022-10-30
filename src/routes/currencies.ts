import express from 'express'
import * as currencyServices from '../services/currencies'
import { handleErrorResponse, validateCurrencyEntry, validateUpdateCurrency, validFieldRequiredNumber } from '../misc/utils'

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
  } catch (e) { handleErrorResponse(e, res) }
})

router.put('/:id', (req, res) => {
  try {
    const id = validFieldRequiredNumber(Number(req.params.id), 'id')
    const currencyEntry = validateUpdateCurrency(req.body)
    void currencyServices.updateCurrency(currencyEntry, id).then(curr => {
      res.send(curr)
    }).catch(e => { handleErrorResponse(e, res) })
  } catch (e) { handleErrorResponse(e, res) }
})

export default router
