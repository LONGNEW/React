import { useEffect, useState } from "react";

function App() {
  const [load, setLoad] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setLoad(false);
        setCoins(json);
      });
  }, []);

  return (
    <div>
      <h1>Coin {load ? "" : `(${coins.length})`}</h1>
      {load ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li>
              {coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price} USD
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
