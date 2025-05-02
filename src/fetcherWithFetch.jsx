import axios from "axios";

const fetcherWithFetch = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export default fetcherWithFetch;
