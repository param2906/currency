const axios = require("axios");

const getTopCryptoPrices = async () => {
  const url = `${process.env.COINGECKO_API}/coins/markets`;
  const params = {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 10,
    page: 1,
    sparkline: false,
  };

  const response = await axios.get(url, { params });
  return response.data;
};

const getHistoricalData = async (coinId) => {
  const url = `${process.env.COINGECKO_API}/coins/${coinId}/market_chart`;
  const params = {
    vs_currency: "usd",
    days: 7,
  };
  const response = await axios.get(url, { params });
  return response.data;
};

module.exports = {
  getTopCryptoPrices,
  getHistoricalData,
};
