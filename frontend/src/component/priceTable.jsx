import React from "react";

const PriceTable = ({ prices }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Coin</th>
          <th>Price (USD)</th>
          <th>24h Change (%)</th>
        </tr>
      </thead>
      <tbody>
        {prices.map((coin) => (
          <tr key={coin.id}>
            <td>
              {coin.name} ({coin.symbol.toUpperCase()})
            </td>
            <td>${coin.current_price.toLocaleString()}</td>
            <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PriceTable;
