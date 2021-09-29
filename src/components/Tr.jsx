import React, { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";

export default function Tr({ item, index }) {
  const { dispatch, selectedDis } = useContext(DataContext);
  return (
    <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
      <td className="p-2 border-r">{index + 1}</td>
      <td className="p-2 border-r">{item.firstName}</td>
      <td className="p-2 border-r">{item.lastName}</td>
      <td className="p-2 border-r">{item.phoneNumber}</td>
      <td>
        <a
          onClick={() => {
            selectedDis({
              type: "edit",
              payload: item,
            });
          }}
          href="#"
          className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black "
        >
          Edit
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
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </a>
        <a
          onClick={() =>
            dispatch({
              type: "remove",
              payload: item.id,
            })
          }
          href="#"
          className="bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-red-500 hover:text-black "
        >
          Remove
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
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </a>
      </td>
    </tr>
  );
}
