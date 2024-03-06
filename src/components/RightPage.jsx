import { FaLongArrowAltRight } from "react-icons/fa";

export default function RightPage() {
  return (
    <section className=" col-span-8 sm:col-span-3 flex flex-col gap-4">
      <div className="bg-blue-700 flex justify-center items-center flex-col gap-1 px-6 py-6 rounded-md text-center text-white">
        <p className="font-bold text-lg">
          {" "}
          Getting Started with KoinX for FREE{" "}
        </p>

        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
          veritatis modi temporibus anim Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <img src="images/signup.png" alt="" className="bg-transparent max-h-[19vw]" />
        <button className="p-2 bg-white rounded-md text-black">
          Get Started for Free <FaLongArrowAltRight className="inline" />
        </button>
      </div>

      <div className="bg-white p-2 rounded-md">
        <h2 className="mb-2 font-bold text-lg"> Trending Coins (24h)</h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-1 flex-col">
            <div className="flex">
              <img
                src="images/bitcoin.svg"
                className="h-6 w-6 rounded-full"
                alt=""
              />
              <span>Bitcoin</span>
            </div>
            <div className="flex">
              <img
                src="images/bitcoin.svg"
                className="h-6 w-6 rounded-full"
                alt=""
              />
              <p>Ethereum</p>
            </div>
            <div className="flex">
              <img
                src="images/bitcoin.svg"
                className="h-6 w-6 rounded-full"
                alt=""
              />
              <p>Ripple</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
