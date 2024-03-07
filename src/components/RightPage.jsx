import { FaLongArrowAltRight, FaCaretUp } from "react-icons/fa";

export default function RightPage({ trends }) {


  return (
    <section className="col-span-8 sm:col-span-3 flex flex-col gap-4">
      <div className="bg-blue-700 flex justify-center items-center flex-col gap-1 px-6 py-6 rounded-md text-center text-white">
        <p className="font-bold mb-2 text-xl sm:text-lg">
          Get Started with KoinX for FREE
        </p>

        <p className="text-base sm:text-sm mb-4 sm:mb-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
          veritatis modi temporibus anim Lorem ipsum dolor sit, amet consectetur
          adipisicing elit.
        </p>
        <img
          src="images/signup.png"
          alt=""
          className="bg-transparent h-[40vw] order-first sm:order-none sm:max-h-[19vw]"
        />
        <button className="p-2 font-semibold bg-white text-sm md:text-md lg:text-base rounded-md text-black">
          Get Started for FREE <FaLongArrowAltRight className="inline" />
        </button>
      </div>

      <div className="w-[100vw]  p-8 -mx-[30px] sm:p-4 sm:mx-0 sm:w-full sm:static bg-white rounded-md">
        <h2 className="mb-4 font-bold text-lg"> Trending Coins (24h)</h2>

        <div className="">
          <div className="flex gap-4 flex-col">
            {trends &&
              trends.slice(0, 3).map((coin, index) => (
                <div key={index} className="flex justify-between">
                  <div className="flex gap-2">
                    <img
                      src={coin.item.thumb}
                      className="h-6 w-6 rounded-full"
                      alt=""
                    />
                    <span className="text-gray-800 text-sm">
                      {coin.item.name} ({coin.item.symbol})
                    </span>
                  </div>

                  <div>
                    <p
                      className={` flex text-sm justify-start items-center w-20 rounded-md ${
                        coin.item.data.price_change_percentage_24h.usd.toFixed(
                          3
                        ) > 0
                          ? "bg-green-100 text-green-700 "
                          : "bg-red-100 text-red-700 "
                      }`}
                    >
                      <FaCaretUp /> &nbsp;
                      {coin.item.data.price_change_percentage_24h.usd.toFixed(
                        3
                      )}
                      %
                    </p>

                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
