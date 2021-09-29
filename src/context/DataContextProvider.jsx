import { nanoid } from "nanoid";
import React, { createContext, useContext, useReducer } from "react";
import DataReducer from "./DataReducer";
import SelectedDataReducer from "./SelectedDataReducer";
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
  const [selectedData, selectedDis] = useReducer(SelectedDataReducer, {});

  return (
    <DataContext.Provider value={{ data, dispatch, selectedData, selectedDis }}>
      {children}
    </DataContext.Provider>
  );
}
