import mongoose from 'mongoose'
import { iCurrencies, iInvestments } from '../types'

export const connectMongoDB = async (): Promise<undefined> => {
  const uri = process.env.MONGODB_URISTRING ?? 'mongodb://Admin:12Jxc@localhost:27017'
  await mongoose.connect(uri)
  console.log('connected')
  return undefined
}

// mongo schemas
export const investmentSchema = new mongoose.Schema<iInvestments>({
  cost: String,
  bought: Number,
  currency: Number,
  id: Number
})
export const currencySchema = new mongoose.Schema<iCurrencies>({
  name: String,
  shortName: String,
  shopping: [Number],
  id: Number
})

// mongo models
export const InvestmentModel = mongoose.model<iInvestments>('investment', investmentSchema)
export const CurrencyModel = mongoose.model<iCurrencies>('currency', currencySchema)
