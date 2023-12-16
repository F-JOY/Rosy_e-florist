import getDBdata from "../request";


export  const getDbFleurs=async()=>{
    try {
        const data = await getDBdata('/api/Fleurs/db', 'GET');
         localStorage.setItem('Fleurs',JSON.stringify(data))
          return data
       
      } catch (error) {
        console.error('Error fetching bouquets:', error.message);
      }
}

export const getFleur=async()=>{
    try {
        const data = await getDBdata('/api/Fleurs/static', 'GET');
        return (data);
      } catch (error) {
        console.error('Error fetching bouquets:', error.message);
      }
}