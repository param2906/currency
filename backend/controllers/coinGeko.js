const {
  getTopCryptoPrices,
  getHistoricalData,
} = require("../apis/coinGekoApi");

const fetchPrices = async (req, res) => {
  try {
    const prices = await getTopCryptoPrices();
    res.json({ success: true, data: prices });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch prices" });
  }
};

const fetchHistorical = async (req, res) => {
  try {
    const coinId = req.query.coin;
    const data = await getHistoricalData(coinId);
    res.json({ success: true, data });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch historical data" });
  }
};

module.exports = {
  fetchPrices,
  fetchHistorical,
};
