import { useEffect, useState } from "react";
import Navbar from "../common/Navbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../common/settings";
import { FaCaretUp } from "react-icons/fa";

export default function CoinPage({ trends }) {
  const { coinId } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${API_URL}/coins/${coinId}`);
      if (response.data) {
        console.log(response.data);
        setCoin(response.data);
      }
    }
    fetchData();
  }, [coinId]);

  return (
    <>
      <Navbar />

      <div className="block mx-[30px] sm:mx-[60px] my-[10px] p-8 min-h-[90vh] bg-white">
        {coin && (
          <div className="">
            <div className="flex justify-start items-center gap-5 text-base ">
              <div className="flex gap-2 justify-center items-center">
                <img
                  src={coin.image.thumb}
                  className="h-8 w-8 rounded-full "
                  alt=""
                />
                <p className="text-lg sm:text-xl font-bold "> {coin.name} </p>
              </div>

              <p className="font-bold text-gray-500">
                {coin.symbol.toUpperCase()}
              </p>

              <p className="font-bold text-gray-600 self-end text-center my-auto">
                Market Rank :{coin.market_data.market_cap_rank}
              </p>
            </div>

            <div className="flex flex-col items-start mt-4 text-xs">
              <div className=" gap-8 flex justify-center items-center">
                <div className="text-xl font-bold">
                  {" "}
                  $ {coin.market_data.current_price.usd}
                </div>

                <p
                  className={` flex justify-center items-center px-2 py-1 rounded-md ${
                    coin.usd_24h_change > 0
                      ? "bg-green-200 text-green-800 "
                      : "bg-red-200 text-red-800 "
                  }`}
                >
                  <FaCaretUp />
                  &nbsp; {coin.market_data.price_change_24h.toFixed(3)}
                </p>

                <p className="text-gray-500"> (24H)</p>
              </div>
              <div>
                <div className="text-sm">
                  {" "}
                  &#8377; {coin.market_data.current_price.inr}
                </div>
              </div>
            </div>

            <div className="my-12 border-0.5 p-8 w-fit">
              {trends &&
              trends.filter((each) => each.item.id == coin.id).length > 0 ? (
                trends
                  .filter((each) => each.item.id == coin.id)
                  .map((filterItem) => (
                    <div
                      key={filterItem.item.id}
                      className="flex justify-start"
                    >
                      <img
                        src={filterItem.item.data.sparkline}
                        className="w-[80vw] sm:w-[25vw]"
                        alt=""
                      />
                    </div>
                  ))
              ) : (
                <div className="flex justify-start">
                  <img
                    src={trends[0].item.data.sparkline}
                    className="w-[80vw] sm:w-[25vw]"
                    alt=""
                  />
                </div>
              )}
            </div>

            <p
              className="text-md text-justify my-6"
              dangerouslySetInnerHTML={{ __html: coin.description.en }}
            ></p>
            {coin.links && coin.links.homepage.length > 1 ? (
              <Link
                to={coin.links.homepage[0]}
                className="mx-auto cursor-pointer p-2 px-3 font-semibold bg-green-500 text-white text-sm md:text-md lg:text-base rounded-md "
              >
                Official Page
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}
