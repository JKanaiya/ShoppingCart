import axios from "axios";

const fetcherWithFetch = async (url) => {
  const response = await axios.get(url);
  const a = response.data.map((prod) => ({ ...prod, count: 1 }));
  return a;
};
export default fetcherWithFetch;
