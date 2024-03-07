import { useEffect, useState, useRef, memo } from "react";
import "../styles/Bitcoin.css";
import axios from "axios";
import { API_URL } from "../common/settings";
import { FaCaretUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Bitcoin() {
  const navigate = useNavigate();
  const container = useRef();
  const [bitcoin, setBitcoin] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `${API_URL}/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true`
      );
      setBitcoin(response.data.bitcoin);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (container.current.querySelector("script")) {
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "border_color": "transparent",
          "range": "ALL",
          "allow_symbol_change": true,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="h-fit sm:h-[85vh] lg:h-[95vh] p-4 bg-white rounded-md">
      <div className="h-[15vh]">
        <div className="flex justify-start items-center gap-5 text-base ">
          <div className="flex gap-2 justify-center items-center cursor-pointer" onClick={ ()=>{navigate(`/bitcoin`) } } >
            <img
              src="images/bitcoin.svg"
              className="h-8 w-8 rounded-full "
              alt=""
            />
            <p className="text-lg sm:text-xl font-bold "> Bitcoin</p>
          </div>

          <p className="font-bold text-gray-500"> BTC</p>
          <button className="p-2 bg-gray-500 rounded-md text-white whitespace-nowrap">
            Rank #1
          </button>
        </div>

        {bitcoin && (
          <div className="flex flex-col items-start mt-4 text-xs">
            <div className=" gap-8 flex justify-center items-center">
              <div className="text-xl font-bold"> $ {bitcoin.usd}</div>

              <p
                className={` flex justify-center items-center px-2 py-1 rounded-md ${
                  bitcoin.usd_24h_change > 0
                    ? "bg-green-200 text-green-800 "
                    : "bg-red-200 text-red-800 "
                }`}
              >
               <FaCaretUp />&nbsp; {bitcoin.usd_24h_change.toFixed(3)}
              </p>

              <p className="text-gray-500"> (24H)</p>
            </div>
            <div>
              <div className="text-sm"> &#8377; {bitcoin.inr}</div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-no-repeat row-span-3 h-[80vw] sm:h-[65vh] lg:h-[75vh] mt-0 ">
        <div
          className="tradingview-widget-container border-none"
          ref={container}
          style={{ width: "100%", border: "none" }}
        ></div>
      </div>
    </div>
  );
}

export default memo(Bitcoin);
