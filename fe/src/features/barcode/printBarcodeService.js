import axios from "axios";
import { HOST_API_SERVER_3 } from "../../services";


export const GetPageItem = async (
    fromDate,
    toDate,
    vendor,
    matID,
    lotNo,
  ) => {
    try {
      const url = `${HOST_API_SERVER_3}/print-barcode/paginated`
  
      const response = await axios.get(url, {
        params: {
          fromDate,
          toDate,
          vendor,
          matID,
          lotNo,
          pageIndex: 1,
          pageSize:500,
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
        `${HOST_API_SERVER_3}/print-barcode/printer`,
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