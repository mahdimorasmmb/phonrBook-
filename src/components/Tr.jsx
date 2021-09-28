import React from "react";

export default function Tr({ item, index }) {
  return (
    <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
      <td className="p-2 border-r">{index + 1}</td>
      <td className="p-2 border-r">{item.firstName}</td>
      <td className="p-2 border-r">{item.lastName}</td>
      <td className="p-2 border-r">{item.phoneNumber}</td>
      <td>
        <a
          href="#"
          className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black "
        >
          Edit
        </a>
        <a
          href="#"
          className="bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black "
        >
          Remove
        </a>
      </td>
    </tr>
  );
}
