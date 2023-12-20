import getDBdata from "../request";

export const handleLogin=async(login,PSW)=>{
    try { 
   
        const dataToSend = { login, PSW }
        const headers = { 'Content-Type': 'application/json' };
        const data = await getDBdata('/api/authentification', 'POSt',dataToSend,headers);
        console.log(data)
        localStorage.setItem("isAuth",data.auth)
        localStorage.setItem("userName",data.nomComplet)
        localStorage.setItem("UserToken",data.token)
        return (data);
      } catch (error) {
        throw error;
       
      }
}

export const verifyLoginToken=async()=>{
  try { 
    const token=(localStorage.getItem('UserToken'))
   // console.log(token)
    const headers = { 'Authorization': 'Bearer ' + token };
    const data = await getDBdata('/api/users/info/token', 'GET',null,headers);
  
    return (data);
  } catch (error) {
    throw error;
   
  }
 
}
export const verifyLoginCookies=async()=>{
  try { 
    const auth =(document.cookie)
   
    const headers = { 'Cookie': auth};
    const data = await getDBdata('/api/users/info/cookies', 'GET',null,headers);
    console.log('fetchUser'+data.nomComplet)
    return (data);
  } catch (error) {
    throw error;
   
  }
 
}