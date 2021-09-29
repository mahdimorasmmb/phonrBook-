import { nanoid } from "nanoid";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import DataReducer from "./DataReducer";
import SelectedDataReducer from "./SelectedDataReducer";

export const DataContext = createContext(
  JSON.parse(localStorage.getItem("data")) || []
);

export default function DataContextProvider({ children }) {
  const [data, dispatch] = useReducer(
    DataReducer,
    JSON.parse(localStorage.getItem("data")) || []
  );
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

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

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
        filedSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
