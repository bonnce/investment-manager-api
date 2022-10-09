import { currencyEntry, iCurrencies } from '../types'
import currenciesData from './currenciesJSON.json'

const currencies: iCurrencies[] = currenciesData as iCurrencies[]

export const getAllCurrencies = (): iCurrencies[] => currencies

export const addCurrencies = (currencyEntry: currencyEntry): iCurrencies => {
  const newCurrency: iCurrencies = {
    id: currencies.length,
    ...currencyEntry
  }
  currencies.push(newCurrency)
  return newCurrency
}
