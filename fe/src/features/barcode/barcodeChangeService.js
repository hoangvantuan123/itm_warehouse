import axios from "axios";
import { HOST_API_SERVER_1 } from "../../services";


export const searchPage = async (
    fromDate,
    toDate,
    lotNo,
    matID,
    barcode,
  ) => {
    try {
      const url = `${HOST_API_SERVER_1}/barcode-change/paginated`
  
      const response = await axios.get(url, {
        params: {
          fromDate,
          toDate,
          lotNo,
          matID,
          barcode,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      if (response.status === 200) {
        return {
          success: true,
          data: response.data,
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

  export const searchPage2 = async ( fromDate,
    toDate,
    lotNo,
    matID,
    barcode) => {
    try {
      const response = await axios.get(
        `${HOST_API_SERVER_1}/barcode-change/paginated`,
        {
          params: {
            fromDate,
            toDate,
            lotNo,
            matID,
            barcode
          },
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
  
      return {
        success: true,
        data: response.data,
      }
    } catch (error) {
      return {
        success: false,
        message: error.response
          ? error.response.data.message || 'Có lỗi xảy ra'
          : 'Không thể kết nối tới server',
      }
    }
  }
  

  export const CreatePrintLabel = async (requestData) => {

    const dataToSend = {
      ip: requestData.ip,
      port: requestData.port,
      data: requestData.data,
      newlabel: requestData.newlabel
    }

    console.log(requestData);
  
    return axios
      .post(
        `${HOST_API_SERVER_1}/print-barcode/printer`,
        dataToSend,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          return response.data
        }
        throw new Error('Error from API: ' + response.data.message)
      })
      .catch((error) => {
        const errorMessage = error.response
          ? error.response.data.message || 'Error from API'
          : 'Unknown error occurred'
        throw new Error(errorMessage)
      })
  }