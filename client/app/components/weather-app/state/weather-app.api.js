export const get = ({ city }) => {
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '1309b0fb73msh701dd5b07f4d0f1p1bdbf5jsnaab2ae4a11ba',
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
    },
  };

  const endpoint = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;

  return fetch(endpoint, options);
};

export default {
  get,
};
