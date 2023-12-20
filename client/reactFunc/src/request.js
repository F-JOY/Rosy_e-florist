const getDBdata = async (url, method, data, headers) => {
  const options = {
    method,
    headers,
  };

  // Ajoutez le corps seulement si la méthode est différente de GET ou HEAD
  if (method !== 'GET' && method !== 'HEAD') {
    options.body = data ? JSON.stringify(data) : undefined;
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export default getDBdata;