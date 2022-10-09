import express from 'express'
import * as investmentsServices from '../services/investments'

const router = express.Router()

router.get('/', (_, res) => {
  const investements = investmentsServices.getAllInvestments()
  res.send(investements)
})

router.post('/', (_, res) => {
  res.send('recieved')
})

export default router
