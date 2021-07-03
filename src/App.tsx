import "./App.css";
import RouterApp from "./routerApp";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

function App() {

  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });
  
  return (
    <ApolloProvider client={client}>
      <RouterApp />
    </ApolloProvider>
  );;
}

export default App;
