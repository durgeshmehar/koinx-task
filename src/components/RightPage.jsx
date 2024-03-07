import { FaLongArrowAltRight } from "react-icons/fa";

export default function RightPage() {
  return (
    <section className="col-span-8 sm:col-span-3 flex flex-col gap-4">
      <div className="bg-blue-700 flex justify-center items-center flex-col gap-1 px-6 py-6 rounded-md text-center text-white">
        <p className="font-bold mb-2 text-xl sm:text-lg">
          {" "}
          Get Started with KoinX for FREE{" "}
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
        <button className="p-2 bg-white text-sm md:text-md lg:text-base rounded-md text-black">
          Get Started for Free <FaLongArrowAltRight className="inline" />
        </button>
      </div>

      <div className="w-[100vw]  p-8 -mx-[30px] sm:p-4 sm:mx-0 sm:w-full sm:static bg-white rounded-md">
        <h2 className="mb-2 font-bold text-lg"> Trending Coins (24h)</h2>

        <div className="">
          <div className="flex gap-1 flex-col">

            <div className="flex justify-between">
              <div className="flex gap-2">
                <img
                  src="images/bitcoin.svg"
                  className="h-6 w-6 rounded-full"
                  alt=""
                />
                <span>Bitcoin (BTC)</span>
              </div>

              <div>
                <p className="bg-green-100 text-green-700 flex justify-center items-center px-2 rounded-md text-sm">
                  8.19%
                </p>
              </div>
            </div>


            <div className="flex justify-between">
              <div className="flex gap-2">
                <img
                  src="images/bitcoin.svg"
                  className="h-6 w-6 rounded-full"
                  alt=""
                />
                <span>Etherium (ETH)</span>
              </div>

              <div>
                <p className="bg-green-100 text-green-700 flex justify-center items-center px-2 rounded-md text-sm">
                  3.98%
                </p>
              </div>
            </div>


            <div className="flex justify-between">
              <div className="flex gap-2">
                <img
                  src="images/bitcoin.svg"
                  className="h-6 w-6 rounded-full"
                  alt=""
                />
                <span>Polygon (MATIC)</span>
              </div>

              <div>
                <p className="bg-green-100 text-green-700 flex justify-center items-center px-2 rounded-md text-sm">
                  2.52%
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
