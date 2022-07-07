
import axios from 'axios';


export const services = () => {
  


    const apiLaCiba= "https://sheetlabs.com/MELQ/catalog"
    const getBooks=async () => {
      const res=await axios.get(apiLaCiba);
        return res 

<<<<<<< HEAD
        
=======
    const apiLaCiba= "https://sheetlabs.com/MELQ/catalog"
    const getBooks= () => {

        return axios.get(apiLaCiba)
>>>>>>> 14418c0b3750b773bfd75bfaea8020799be47925

    }
  return {
    getBooks
  
  }
}

