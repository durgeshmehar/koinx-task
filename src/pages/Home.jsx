// import { useState } from "react";
import Navbar from "../common/Navbar";
import { FaAngleDoubleRight } from "react-icons/fa";
import LeftPage from "../components/LeftPage";
import RightPage from "../components/RightPage";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="block mx-[30px] my-[10px]">
        <p className="text-xs text-normal text-gray-600 sm:mb-2">
          {" "}
          Cryptocurrencies{" "}
          <FaAngleDoubleRight className="inline text-gray-600" />
          <span className="text-gray-700 font-semibold"> Bitcoin</span>{" "}
        </p>
        
        <div className=" section sm y-[10px] grid grid-cols-8 gap-4 w-full">
          <LeftPage />
          <RightPage />
        </div>
        
      </div>

    </>
  );
}
