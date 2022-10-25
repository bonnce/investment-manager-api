import { CurrencyModel } from '../misc/mongo'
import { autoIncrement } from '../misc/utils'
import { currencyEntry, iCurrencies } from '../types'

export const getAllCurrencies = async (): Promise<iCurrencies[]> => {
  const currencies = await CurrencyModel.find()
  return currencies as iCurrencies[]
}

export const addCurrency = async (currencyEntry: currencyEntry): Promise<iCurrencies> => {
  const currencies = await getAllCurrencies()
  const newCurrency: iCurrencies = {
    id: currencies.length > 0 ? autoIncrement(currencies) : 0,
    ...currencyEntry
  }
  const newCurrencyEntry = new CurrencyModel(newCurrency)
  await newCurrencyEntry.save()
  return newCurrency
}
