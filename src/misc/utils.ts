import { Response } from 'express'
import { currencyEntry, iCurrencies, iInvestments, investmentEntry } from '../types'

const isString = (str: string): boolean => typeof str === 'string'

const isNumber = (n: number): boolean => typeof n === 'number'

const isArrayOfNum = (arr: number[]): boolean => Array.isArray(arr) && arr.filter(n => !isNumber(n)).length === 0

const validFieldUpdate = <T>(name: any, validation: (name: any) => T): T | undefined => {
  if (name === undefined) return undefined
  return validation(name)
}

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

const validFieldRequiredNumber = (field: any, fieldName: string): number => {
  if (isNumber(field)) return field
  throw new Error(`Invalid type on ${fieldName}, must be number!`)
}

const validFieldNumber = (field: any, fieldName: string): number|undefined => {
  if (field === undefined) return undefined
  if (isNumber(field)) return field
  throw new Error(`Invalid type on ${fieldName}, must be number!`)
}

const validateCurrencyEntry = (body: any): currencyEntry => {
  const validEntry: currencyEntry = {
    name: validName(body.name),
    shortName: validShortName(body.shortName),
    shopping: validShopping(body.shopping)
  }
  return validEntry
}

const validateUpdateCurrency = (body: any): Partial<currencyEntry> => {
  const validEntry: Partial<currencyEntry> = {
    name: validFieldUpdate(body.name, validName),
    shortName: validFieldUpdate(body.shortName, validShortName),
    shopping: validFieldUpdate(body.shopping, validShopping)
  }
  return validEntry
}

const validateInvestmentEntry = (body: any): investmentEntry => {
  const validEntry: investmentEntry = {
    cost: validFieldRequiredNumber(body.cost, 'cost'),
    bought: validFieldRequiredNumber(body.bought, 'bought'),
    currency: validFieldRequiredNumber(body.currency, 'currency')
  }
  return validEntry
}

const validateUpdateInvestment = (body: any): Partial<investmentEntry> => {
  const validEntry: Partial<investmentEntry> = {
    cost: validFieldNumber(body.cost, 'cost'),
    bought: validFieldNumber(body.bought, 'bought'),
    currency: validFieldNumber(body.currency, 'currency')
  }
  return validEntry
}

const autoIncrement = (arr: iInvestments[] | iCurrencies[]): number => {
  return Math.max(...arr.map(i => i.id)) + 1
}

const handleErrorResponse = (e: unknown, res: Response): void => {
  const { message } = e as Error
  res.status(400).send(message)
}

export {
  validateCurrencyEntry,
  validateInvestmentEntry,
  validFieldRequiredNumber,
  autoIncrement,
  validateUpdateCurrency,
  handleErrorResponse,
  validateUpdateInvestment
}
