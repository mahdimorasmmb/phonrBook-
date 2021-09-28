import { nanoid } from "nanoid";
import React, { createContext, useContext, useReducer } from "react";
import DataReducer from "./DataReducer";
const initialState = [
  {
    id: nanoid(),
    firstName: "mahdi",
    lastName: "moras",
    phoneNumber: "09132602278",
  },
];

export const DataContext = createContext(initialState);

export default function DataContextProvider({ children }) {
  const [data, dispatch] = useReducer(DataReducer, initialState);
  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
