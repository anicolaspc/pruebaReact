import React from "react";
import PhoneList from "./components/phones";
import BrandList from "./components/brands";

const App = () => {
  return (
    <>
      <div className="filter">
        <BrandList />
      </div>
      <div className="result">
        <PhoneList />
      </div>
    </>
  )
}

export default App