
import axios from 'axios'


export const services = () => {



    const apiLaCiba= "https://sheetlabs.com/MELQ/catalog"
    const getBooks= () => {

        return axios.get(apiLaCiba)

    }
  return {
    getBooks
  
  }
}

