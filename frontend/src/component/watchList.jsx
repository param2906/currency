import React from "react";

const Watchlist = ({ watchlist, removeFromWatchlist }) => (
  <div>
    <h3>Your Watchlist</h3>
    <ul>
      {watchlist.map((coin) => (
        <li key={coin}>
          {coin}{" "}
          <button onClick={() => removeFromWatchlist(coin)}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
);

export default Watchlist;
