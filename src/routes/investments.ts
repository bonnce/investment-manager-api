import express from 'express'
import * as investmentsServices from '../services/investments'
import { validateInvestmentEntry, validFieldNumber } from '../utils'

const router = express.Router()

router.get('/', (_, res) => {
  const investements = investmentsServices.getAllInvestments()
  res.send(investements)
})

router.post('/', (req, res) => {
  try {
    const investementEntry = validateInvestmentEntry(req.body)
    const investmentAdded = investmentsServices.addInvestment(investementEntry)
    res.send(investmentAdded)
  } catch (e) {
    const { message } = e as Error
    res.status(400).send(message)
  }
})

router.delete('/:id', (req, res) => {
  try {
    const id = validFieldNumber(Number(req.params.id), 'id')
    const investmentDeleted = investmentsServices.deleteInvestment(id)
    res.send(investmentDeleted)
  } catch (e) {
    const { message } = e as Error
    res.status(400).send(message)
  }
})

export default router
