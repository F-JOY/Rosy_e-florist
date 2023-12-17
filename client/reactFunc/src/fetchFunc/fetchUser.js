import getDBdata from "../request";

export const getUser=async(login,PSW)=>{
    try { 
   
        const dataToSend = { login, PSW }
        const headers = { 'Content-Type': 'application/json' };
        const data = await getDBdata('/api/authentification', 'POSt',dataToSend,headers);
        console.log(data)
        localStorage.setItem("isAuthontificated",true)
        localStorage.setItem("userName",data.nomComplet)
        localStorage.setItem("UserToken",data.token)
        return (data);
      } catch (error) {
        throw error;
        console.error('Error fetching user:', error.message);
      }
}