import MyHeader from "./components/MyHeader";
import { useState } from "react";
import MyContent from "./components/MyContent";

function App() {
  return (
    <div className="flex w-full flex-col  justify-items-start items-start">
      <MyHeader />
      <MyContent />
    </div>
  );
}

export default App;
