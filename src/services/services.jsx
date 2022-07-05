
import axios from 'axios'


export const services = () => {



    const apiLaCiba= "https://sheetdb.io/api/v1/dqmvr2e2rl6ru"
    const getBooks= () => {
        return axios.get(apiLaCiba)

    }
  return {
    getBooks
  
  }
}

