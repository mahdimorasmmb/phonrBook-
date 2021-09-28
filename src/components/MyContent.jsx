import Search from "./Search";
import React from "react";
import Form from "./Form";
import Table from "./Table";
export default function MyContent() {
  return (
    <div className="w-full">
      <Form />
      <Search />
      <Table />
    </div>
  );
}
