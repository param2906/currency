import React, { useState, useEffect } from "react";
import { getPrices, getHistorical } from "./service/api";
import PriceTable from "./component/priceTable";
import HistoricalChart from "./component/HistoricalCharts";
import Watchlist from "./component/watchList";

const App = () => {
  const [prices, setPrices] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [historicalData, setHistoricalData] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  const fetchPrices = async () => {
    const res = await getPrices();
    setPrices(res.data.data);
  };

  const fetchHistorical = async (coin) => {
    const res = await getHistorical(coin);
    setHistoricalData(res.data.data);
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchHistorical(selectedCoin);
  }, [selectedCoin]);

  const addToWatchlist = (coinId) => {
    if (!watchlist.includes(coinId)) {
      setWatchlist([...watchlist, coinId]);
    }
  };

  const removeFromWatchlist = (coinId) => {
    setWatchlist(watchlist.filter((coin) => coin !== coinId));
  };

  return (
    <div>
      <h1>Crypto Dashboard</h1>
      <PriceTable prices={prices} />

      <h3>Select a Coin to View History</h3>
      <select
        onChange={(e) => setSelectedCoin(e.target.value)}
        value={selectedCoin}
      >
        {prices.map((coin) => (
          <option key={coin.id} value={coin.id}>
            {coin.name}
          </option>
        ))}
      </select>
      <button onClick={() => addToWatchlist(selectedCoin)}>
        Add to Watchlist
      </button>

      {historicalData && (
        <HistoricalChart data={historicalData} coin={selectedCoin} />
      )}

      <Watchlist
        watchlist={watchlist}
        removeFromWatchlist={removeFromWatchlist}
      />
    </div>
  );
};

export default App;
