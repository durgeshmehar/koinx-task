import React from "react";

export default function Tokenomics() {
  return (
    <div className="h-fit p-4 mt-4 bg-white rounded-md">
      <p className="text-lg font-bold flex justify-start items-center">
        Tokenomics
      </p>

      <div className="">
        <p className="text-base text-gray-700 py-2 pb-4 font-semibold flex justify-start items-center">
          Initial Distribution &nbsp;
        </p>

        <div className="flex">
          <div className="w-[30%] rounded-full flex justify-center items-center font-bold text-green-500">
            <img src="images/pi.png" alt="" className="" />
          </div>

          <div className="flex flex-col justify-center items-start gap-4 w-full ml-4">
            <div className="flex justify-center items-center gap-2">
              <div className="dot w-2 h-2 rounded-full bg-[#5271FF]"></div>{" "}
              Crowdsale investors : 80%
            </div>

            <div className="flex justify-center items-center gap-2">
              <div className="dot w-2 h-2 rounded-full bg-[#FFBD59]"></div>{" "}
              Foundation : 20%
            </div>
          </div>
        </div>

        <p className="text-gray-600 py-4">
          Bitcoin was invented in 2008 by an unknown person or group of people
          using the name Satoshi Nakamoto. The currency began use in 2009 when
          its implementation was released as open-source software. distinctio
          fugit minima!Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt distinctio fugit minima!
        </p>
      </div>
    </div>
  );
}
