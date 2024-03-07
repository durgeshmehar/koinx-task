import { useEffect, useRef,memo } from "react";
import "../styles/Bitcoin.css";


function Bitcoin() {
  const container = useRef();

  useEffect(
    () => {
      if (container.current.querySelector('script')) {
        return;
      }

      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
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
    },
    []
  );

  return (
    <div className="h-fit sm:h-[85vh] lg:h-[95vh] p-4 bg-white rounded-md">

      <div className="h-[15vh]">
        <div className="flex justify-start items-center gap-5 text-base ">

          <img src="images/bitcoin.svg" className="h-8 w-8 rounded-full" alt="" />
          <p className="text-lg font-bold"> Bitcoin</p>

          <p className="font-bold text-gray-500"> BTC</p>
          <button className="p-2 bg-gray-500 rounded-md text-white whitespace-nowrap">
            Rank #1
          </button>
          
        </div>

        <div className="flex flex-col items-start mt-4 text-xs">
          <div className=" gap-8 flex justify-center items-center">
            <div className="text-lg font-bold"> $46,953.04</div>
            <p className="bg-green-200 text-green-800 flex justify-center items-center px-1 rounded-md"> 2.52%</p>
            <p className="text-gray-500"> (24H)</p>
          </div>
          <div>
          <div className="text-sm"> &#8377; 39,34,545</div>
          </div>
        </div>

      </div>

      <div className="bg-no-repeat row-span-3 h-[80vw] sm:h-[65vh] lg:h-[75vh] mt-1 sm:mt-4 ">
        <div className="tradingview-widget-container border-none" ref={container} style={{width: "100%",border:"none"}}>
        </div>
      </div>

    </div>
  );
}

export default memo(Bitcoin);