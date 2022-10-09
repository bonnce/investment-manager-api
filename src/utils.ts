import { currencyEntry } from './types'

const isString = (str: string): boolean => typeof str === 'string'

const isNumber = (n: number): boolean => typeof n === 'number'

const isArrayOfNum = (arr: number[]): boolean => Array.isArray(arr) && arr.filter(n => !isNumber(n)).length === 0

const validName = (name: any): string => {
  if (isString(name)) return name
  throw new Error('Invalid type on name, must be string!')
}

const validShortName = (sName: any): string => {
  if (isString(sName)) return sName
  throw new Error('Invalid type on short name, must be string!')
}

const validShopping = (shopping: any): number[] => {
  if (isArrayOfNum(shopping)) return shopping
  throw new Error('Invalid type on shopping, must be array of numbers!')
}

const validateCurrencyEntry = (body: any): currencyEntry => {
  const validEntry: currencyEntry = {
    name: validName(body.name),
    shortName: validShortName(body.shortName),
    shopping: validShopping(body.shopping)
  }
  return validEntry
}

export default validateCurrencyEntry
