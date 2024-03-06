import { useState } from "react";
import Bitcoin from "./Bitcoin";
import Performance from "./Performance";
import Sentiment from "./Sentiment";
import AboutBitcoin from "./AboutBitcoin";
import Tokenomics from "./Tokenomics";
import Team from "./Team";




const options = [
    { name: "Overview", value: "overview" },
    { name: "Fundamentals", value: "fundamentals" },
    { name: "News Insights", value: "news-insights" },
    { name: "Sentiments", value: "sentiments" },
    { name: "Team", value: "team" },
    { name: "Technical", value: "technical" },
    { name: "Tokenomics", value: "tokenomics" },
    { name: "science", value: "science" },
  ];

  
export default function LeftPage () {
    const [selected, setSelected] = useState("overview");
    
  return (
    <section className="col-span-8 sm:col-span-5">
      <Bitcoin />

      <div className="flex overflow-x-auto  py-6 scrollbar-hide ">
        {options.map((option) => (
          <div
            className={`p-4 border-b-4 cursor-pointer transition-all duration-300  ease-in-out rounded-sm ${
              option.value === selected ? "border-b-4  border-blue-700" : ""
            }`}
            key={option.value}
            onClick={() => setSelected(option.value)}
          >
            <p className=" text-gray-900 whitespace-nowrap hover:text-gray-700 ">
              {option.name}
            </p>
          </div>
        ))}
      </div>

      <Performance />
      <Sentiment />
      <AboutBitcoin />
      <Tokenomics />
      <Team />
      
    </section>
  );
}
