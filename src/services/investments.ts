import { iInvestments, investmentEntry } from '../types'
import investmentsData from './investmentsJSON.json'

const investments: iInvestments[] = investmentsData as iInvestments[]

export const getAllInvestments = (): iInvestments[] => investments

export const addInvestment = (investmentEntry: investmentEntry): iInvestments => {
  const newCurrency: iInvestments = {
    id: Math.max(...investments.map(inv => inv.id)) + 1,
    ...investmentEntry
  }
  investments.push(newCurrency)
  return newCurrency
}

export const deleteInvestment = (id: number): iInvestments => {
  const invToDelete = investments.filter(f => f.id === id)
  if (invToDelete.length === 1) {
    const index = investments.indexOf(invToDelete[0])
    const invDeleted = investments.splice(index, 1)
    return invDeleted[0]
  }
  throw new Error(`Not found an investment with that id ${id}`)
}
