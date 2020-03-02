import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import bitcoin from "./bitcoin.svg";

import "./App.css";

// const GET_PRICES = gql`
//   {
//     getPrices {
//       price
//     }
//   }
// `;

const getPrice = currency => gql`
  {
    getPrice(currency: "${currency}") {
      price
    }
  }
`;

function PriceTicker({ currency }) {
  const { loading, error, data } = useQuery(getPrice(currency));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const price = data.getPrice.price;

  return (
    <h2>
      {price.symbol}&nbsp;
      {price.last}
    </h2>
  );
}

// function AllPrices() {
//   const { loading, error, data } = useQuery(GET_PRICES);
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   const prices = data.getPrices.price;
//   return Object.keys(prices).map(price => {
//     const currency = prices[price];
//     return (
//       <code key={`${currency.symbol}-${currency.last}`}>
//         <pre>
//           {currency.symbol} {currency.last}
//           <br />
//         </pre>
//       </code>
//     );
//   });
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="btc logo" src={bitcoin} />
        <h1>Bitcoin GraphQL Price Ticker</h1>
      </header>
      <PriceTicker currency={"EUR"} />
      <PriceTicker currency={"USD"} />
      {/* <AllPrices /> */}
    </div>
  );
}

export default App;
