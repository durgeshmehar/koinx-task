// import { useState } from "react";
import Navbar from "../common/Navbar";
import { FaAngleDoubleRight } from "react-icons/fa";
import LeftPage from "../components/LeftPage";
import RightPage from "../components/RightPage";
import { useState ,useEffect } from "react";
import axios from "axios";
import { API_URL } from "../common/settings";

export default function Home() {
  const [trends , setTrends] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `${API_URL}/search/trending`
      );
      setTrends(response.data.coins);
    }
    fetchData();
  }, []);


  return (
    <>
      <Navbar />

      <div className="block mx-[30px] sm:mx-[60px] my-[10px]">
        <p className="text-xs text-normal text-gray-600 mb-2">
          {" "}
          Cryptocurrencies{" "}
          <FaAngleDoubleRight className="inline text-gray-600" />
          <span className="text-gray-700 font-semibold"> Bitcoin</span>{" "}
        </p>
        
        <div className=" section sm y-[10px] grid grid-cols-8 gap-4 w-full">
          {console.log("home :", trends )}
          <LeftPage  trends={trends}/>
          <RightPage trends={trends} />
        </div>

      </div>

    </>
  );
}
