import axios from './axios'
import { baseURL } from '../assets/constant/constant'
import AsyncStorage from '@react-native-community/async-storage'

export class billManagingService {
  createBillService = async (bill) => {
    let newBill = {...bill}
    const accountId = await AsyncStorage.getItem('userId')
    newBill.payerId = accountId
    return axios({
      url: `${baseURL}/bills`,
      method: 'POST',
      data: newBill
    })
  }

  getBillOfSelfService = async () => {
    const accountId = await AsyncStorage.getItem('userId')
    return axios({
      url: `${baseURL}/bills?filter={"where": {"payerId": ${JSON.stringify(accountId)}}}`,
      method: 'GET'
    })
  }

  getBillBorrowersService = (billId) => {
    return axios({
      url: `${baseUrl}/bills/${billId}/borrower`
    })
  }
}

export const billService = new billManagingService();