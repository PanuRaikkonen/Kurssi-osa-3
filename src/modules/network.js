/**
 * Fetches (GET) JSON data from API
 *
 * @param {string} - api endpoint url
 */
const fetchData = async (url, useProxy = false) => {
  if (useProxy) {
    url = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
  }
  let jsonData;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }
    jsonData = await response.json();
  } catch (error) {
    console.error("network.js fetchData() error", error);
    jsonData = {};
  }
  return jsonData;
};

export { fetchData };
