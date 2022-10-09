export interface iCurrencies {
  name: string
  shortName: string
  shopping: number[]
  id: number
}

export interface iInvestments {
  cost: number
  bought: number
  currency: number
  id: number
}

export type currencyEntry = Omit<iCurrencies, 'id'>
export type investmentEntry = Omit<iInvestments, 'id'>
