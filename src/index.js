import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const uri = "http://localhost:4000";
const client = new ApolloClient({ uri });

const GQLApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<GQLApp />, document.getElementById("root"));

serviceWorker.unregister();
