export const fetcherWithFetch = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP Error: Status ${response.status}`);
  }
  return response.json();
};
