import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import Tr from "./Tr";

export default function Table() {
  const { data, dispatch, searchData, handleFiledSearch, filedSearch } =
    useContext(DataContext);

  return (
    <div className="table w-full p-2">
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Index</div>
            </th>
            <th
              className={`p-2 border-r cursor-pointer text-sm font-thin text-gray-500 ${
                filedSearch === "firstName" && "bg-green-400 text-gray-100"
              } hover:bg-green-200`}
            >
              <div
                className="flex items-center justify-center  "
                id="firstName"
                onClick={(e) => {
                  handleFiledSearch(e.target.id);
                }}
              >
                First Name
              </div>
            </th>
            <th
              className={`p-2 border-r cursor-pointer text-sm font-thin text-gray-500 ${
                filedSearch === "lastName" && "bg-green-400 text-gray-100"
              } hover:bg-green-200`}
            >
              <div
                className="flex items-center justify-center"
                id="lastName"
                onClick={(e) => {
                  handleFiledSearch(e.target.id);
                }}
              >
                last Name
              </div>
            </th>
            <th
              className={`p-2 border-r cursor-pointer text-sm font-thin text-gray-500 ${
                filedSearch === "phoneNumber" && "bg-green-400 text-gray-100"
              } hover:bg-green-200`}
            >
              <div
                className="flex items-center justify-center"
                id="phoneNumber"
                onClick={(e) => {
                  handleFiledSearch(e.target.id);
                }}
              >
                Phone Number
              </div>
            </th>
            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
              <div className="flex items-center justify-center">Action</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {searchData
            ? searchData.map(
                (item, index) =>
                  item && <Tr key={item.id} item={item} index={index} />
              )
            : data.map((item, index) => (
                <Tr key={item.id} item={item} index={index} />
              ))}
        </tbody>
      </table>
    </div>
  );
}
