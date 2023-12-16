
import getDBdata from "../request";


export  const getDbBouquet=async()=>{
    try {
        const data = await getDBdata('/api/Bouquets/db', 'GET');
        localStorage.setItem("Bouquets",JSON.stringify(data))
        return (data);
      } catch (error) {
        console.error('Error fetching bouquets:', error.message);
      }
}
export  const getBouquet=async()=>{
    try {
        const data = await getDBdata('/api/Bouquets/static', 'GET');
        return (data);
      } catch (error) {
        console.error('Error fetching bouquets:', error.message);
      }
}
 
export const likeStaticBouquet=async(id)=>{

    try {
        const data = await getDBdata(`/api/Bouquets/like/static/${id}`, 'PUT');
        console.log("Server response:", data); 
        return (data);
      } catch (error) {
        console.error('Error fetching bouquets:', error.message);
      }

   
}