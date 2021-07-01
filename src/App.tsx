import "./App.css";
import HomeContextProvider from "../src/context/Context";
import RouterApp from "./routerApp";

function App() {
  return (
    <HomeContextProvider>
      <RouterApp />
    </HomeContextProvider>
  )
}

export default App;
