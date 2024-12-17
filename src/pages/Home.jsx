import React from "react";
import Navbar from "../layout/Navbar";

const Home = () => {
  return (
    <div className="flex">
      {/* Side Navbar */}
      <Navbar />

    
      <div className="flex-1 bg-[#3a3837] text-white p-6">
        <p className="text-xl">test</p>
      </div>
    </div>
  );
};

export default Home;
