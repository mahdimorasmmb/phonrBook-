import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContextProvider";

export default function Search() {
  const { handleSearch } = useContext(DataContext);
  const [inputSearch, setInputSearch] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(inputSearch);
      }}
      className="px-12 py-5 w-full  flex justify-center "
    >
      <button
        className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black "
        type="submit"
      >
        Search
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 inline"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <input
        value={inputSearch}
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 mx-3  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400 hover:border-blue-200"
        type="text"
        placeholder="Search"
      />
    </form>
  );
}

//
