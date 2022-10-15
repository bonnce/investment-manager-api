import { currencyEntry, iCurrencies } from '../types'
import currenciesData from './currenciesJSON.json'

const currencies: iCurrencies[] = currenciesData as iCurrencies[]

export const getAllCurrencies = (): iCurrencies[] => currencies

export const addCurrency = (currencyEntry: currencyEntry): iCurrencies => {
  const newCurrency: iCurrencies = {
    id: Math.max(...currencies.map(curr => curr.id)) + 1,
    ...currencyEntry
  }
  currencies.push(newCurrency)
  return newCurrency
}
