
import axios from 'axios';


export const services = () => {
  


    const apiLaCiba= "https://sheetlabs.com/MELQ/catalog"
    const getBooks=async () => {
      const res=await axios.get(apiLaCiba);
        return res 

        

    }
  return {
    getBooks
  
  }
}

