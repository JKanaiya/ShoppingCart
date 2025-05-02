import axios from "axios";

export const fetcherWithFetch = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
