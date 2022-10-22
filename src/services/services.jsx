
import axios from 'axios';


export const services = () => {
  


    const apiLaCiba= "https://sheetlabs.com/MELQ/catalog"

    const getBooks=async () => {
      const res=await axios.get(apiLaCiba);
        return res 
    };
    const get =async() => {
      const res = await axios.get(url);
      return res; 
 };

 const create = async (data) => {
     const res = await axios.post(url,data);
     return res;
 };

 const destroy = async (id) => {
     let urlID=`${url}/${id}`;
     const res = await axios.delete(urlID)
     return res;
 };

 const update = async (data) => {
     let urlID= `${url}/${data.id}`;
     const res = await axios.post(urlID, data);
     return res;
 };


        

    // const apiLaCiba= "https://sheetlabs.com/MELQ/catalog"
    // const getBooks= () => {

    //     return axios.get(apiLaCiba)


    // }
  return {
    getBooks,
    create,
    destroy,
    update,
  
  }
}

