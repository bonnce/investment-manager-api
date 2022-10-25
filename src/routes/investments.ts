import express from 'express'
import * as investmentsServices from '../services/investments'
import { validateInvestmentEntry, validFieldNumber } from '../misc/utils'

const router = express.Router()

router.get('/', (_, res) => {
  void investmentsServices.getAllInvestments().then(inv => {
    res.send(inv)
  })
})

router.post('/', (req, res) => {
  try {
    const investmentEntry = validateInvestmentEntry(req.body)
    void investmentsServices.addInvestment(investmentEntry).then(inv => {
      res.send(inv)
    })
  } catch (e) {
    const { message } = e as Error
    res.status(400).send(message)
  }
})

router.delete('/:id', (req, res) => {
  try {
    const id = validFieldNumber(Number(req.params.id), 'id')
    void investmentsServices.deleteInvestment(id).then(inv => {
      res.send(inv)
    })
  } catch (e) {
    const { message } = e as Error
    res.status(400).send(message)
  }
})

export default router
