import { createContext } from "react";
import api from "../api/api";
import {
  HomeContextData,
  HomeContextProviderProps,
} from "../interfaces/Context";
export const HomeContext = createContext({} as HomeContextData);

const HomeContextProvider = ({ children }: HomeContextProviderProps) => {
  async function getData() {
    try {
      api
        .get("/character")
        .then((response) => console.log(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <HomeContext.Provider
      value={{
        getData,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
