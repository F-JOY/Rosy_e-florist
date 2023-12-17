const getDBdata = async (url, method, data, headers) => {
    const response = await fetch(url, {
      method,
      headers,
      body: data ? JSON.stringify(data) : undefined,
    });
   //console.log(data);
    if (!response.ok) {
      throw new Error(`Error: ${response}`);
    }
    return response.json();
  };
export default getDBdata;