import { iInvestments } from '../types'
import investmentsData from './investmentsJSON.json'

const investments: iInvestments[] = investmentsData as iInvestments[]

export const getAllInvestments = (): iInvestments[] => investments

export const addInvestments = (): undefined => undefined
