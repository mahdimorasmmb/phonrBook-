import { Button } from "antd";
import React from "react";

export default function Form() {
  return (
    <form className="p-12 w-full  flex justify-between  ">
      <button className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
        Add
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 inline "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>

      <div>
        <label className="text-2xl text-gray-800 ">First name:</label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 mx-3  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400 hover:border-blue-200"
          type="text"
          placeholder="Enter first name"
        />
      </div>
      <div>
        <label className="text-2xl text-gray-800 ">Last name:</label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 mx-3  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400 hover:border-blue-200"
          type="text"
          placeholder="Enter Last name"
        />
      </div>
      <div>
        <label className="text-2xl text-gray-800 ">Phone Number: </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 mx-3  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400 hover:border-blue-200 "
          type="number"
          placeholder="Enter Number Phone"
        />
      </div>
    </form>
  );
}
