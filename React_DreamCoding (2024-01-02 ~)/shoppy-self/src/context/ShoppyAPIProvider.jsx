import React, { createContext, useContext } from "react";
import ShoppyAPI from "../api/shoppyAPI";
import FakeAPIClient from "../api/fakeAPIClient";
import ShoppyClient from "../api/shoppyClient";

export const ShoppyAPIContext = createContext();

//const APIClient = new FakeAPIClient();
const APIClient = new ShoppyClient();
const shoppyAPI = new ShoppyAPI(APIClient);

export function ShoppyAPIProvider({ children }) {
  return (
    <ShoppyAPIContext.Provider value={{ shoppyAPI }}>
      {children}
    </ShoppyAPIContext.Provider>
  );
}

export function useShoppyAPI() {
  return useContext(ShoppyAPIContext);
}
