import axios from 'axios'
import { HOST_API_SERVER_1 } from '../../services'
import { ERROR_MESSAGES } from '../../utils/constants'
import { accessToken } from '../../services/tokenService'

export const GetMatWHStockInList = async (blSeq, blSerl) => {
  try {
    const url = `${HOST_API_SERVER_1}/mssql/stock-in/itm-spd-mat-wh-stockin-list`

    const response = await axios.get(url, {
      params: {
        blSeq,
        blSerl,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status === 200) {
      return {
        success: true,
        data: response.data.data,
      }
    } else {
      return {
        success: false,
        message: ERROR_MESSAGES.ERROR,
      }
    }
  } catch (error) {
    return {
      success: false,
      message: error.response
        ? error.response.data.message
        : ERROR_MESSAGES.ERROR,
    }
  }
}
