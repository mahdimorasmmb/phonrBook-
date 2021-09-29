import { nanoid } from "nanoid";
import React, { createContext, useContext, useReducer, useState } from "react";
import DataReducer from "./DataReducer";
import SelectedDataReducer from "./SelectedDataReducer";
const initialState = [
  {
    id: nanoid(),
    firstName: "mahdi",
    lastName: "moras",
    phoneNumber: "09132656502278",
  },
  {
    id: nanoid(),
    firstName: "amir",
    lastName: "rah",
    phoneNumber: "0977132602278",
  },
  {
    id: nanoid(),
    firstName: "ali",
    lastName: "bed",
    phoneNumber: "0913260442278",
  },
  {
    id: nanoid(),
    firstName: "mamad",
    lastName: "teh",
    phoneNumber: "091324442278",
  },
];

export const DataContext = createContext(initialState);

export default function DataContextProvider({ children }) {
  const [data, dispatch] = useReducer(DataReducer, initialState);
  const [selectedData, selectedDis] = useReducer(SelectedDataReducer, {});
  const [searchData, setSearchData] = useState("");
  const [filedSearch, setFiledSearch] = useState("firstName");

  const handleSearch = (text) => {
    const newSearchData = data.map((item) => {
      if (item[filedSearch].includes(text)) {
        return item;
      }
    });
    console.log(newSearchData);
    setSearchData(newSearchData);
  };

  const handleFiledSearch = (text) => {
    setFiledSearch(text);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        dispatch,
        selectedData,
        selectedDis,
        handleSearch,
        searchData,
        handleFiledSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
