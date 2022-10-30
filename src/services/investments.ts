import { InvestmentModel } from '../misc/mongo'
import { autoIncrement } from '../misc/utils'
import { iInvestments, investmentEntry } from '../types'

export const getAllInvestments = async (): Promise<iInvestments[]> => {
  const currencies = await InvestmentModel.find()
  return currencies as iInvestments[]
}

export const addInvestment = async (investmentEntry: investmentEntry): Promise<iInvestments> => {
  const investments = await getAllInvestments()
  const newInvestment: iInvestments = {
    id: investments.length > 0 ? autoIncrement(investments) : 0,
    ...investmentEntry
  }
  const newInvestmentEntry = new InvestmentModel(newInvestment)
  void await newInvestmentEntry.save()
  return newInvestment
}

export const deleteInvestment = async (id: number): Promise<iInvestments> => {
  const invToDelete = await InvestmentModel.findOne({ id })
  if (invToDelete === null) throw new Error('Object not found')
  void await InvestmentModel.deleteOne({ id })
  return invToDelete as iInvestments
}

export const updateInvestments = async (investmentEntry: Partial<investmentEntry>, id: number): Promise<iInvestments> => {
  try {
    const shopping = await InvestmentModel.findOneAndUpdate({ id }, investmentEntry, { new: true })
    if (shopping === null) throw new Error('Object not found')
    const newInvestment = {
      id: shopping.id,
      cost: shopping.cost,
      bought: shopping.bought,
      currency: shopping.currency
    }
    return newInvestment
  } catch (e) {
    const { message } = e as Error
    throw new Error(message)
  }
}
