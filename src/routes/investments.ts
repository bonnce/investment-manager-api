import express from 'express'

const router = express.Router()

router.get('/', (_, res) => {
  res.send('get all investements')
})

router.post('/', (_, res) => {
  res.send('recieved')
})

export default router
