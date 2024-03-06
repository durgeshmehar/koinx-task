import Ibutton from "../common/Ibutton";

export default function Performance() {
  return (
    <div className="h-fit p-4 bg-white rounded-md">
      <div className="">
        <p className="text-lg font-bold flex justify-start items-center">
          {" "}
          Performance{" "}
        </p>

        <div className="flex flex-col gap-8">
          <div className="flex gap-4  items-center justify-between whitespace-nowrap text-sm">
            <div className="">
              <p className="text-gray-500"> Today&apos;s low </p>
              <p className="text-gray-700"> 47,000</p>
            </div>
            <div className="col-span-4 w-full h-1 rounded-md bg-gradient-to-r from-red-500 via-red-500 to-orange-500 from-yellow-400 via-green-500 to-green-500"></div>
            <div>
              <p className="text-gray-500"> Today&apos;s High </p>
              <p className="text-gray-700"> 76,000</p>
            </div>
          </div>

          <div className="flex gap-4  items-center justify-between whitespace-nowrap text-sm">
            <div className="">
              <p className="text-gray-500"> Today&apos;s low </p>
              <p className="text-gray-700"> 47,000</p>
            </div>
            <div className="col-span-4 w-full h-1 rounded-md bg-gradient-to-r from-red-500 via-red-500 to-orange-500 from-yellow-400 via-green-500 to-green-500"></div>
            <div>
              <p className="text-gray-500"> Today&apos;s High </p>
              <p className="text-gray-700"> 76,000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-base text-gray-700 py-4 font-semibold flex justify-start items-center">
          Fundamentals &nbsp; <Ibutton />{" "}
        </p>
        <div className="flex flex-col  gap-10 lg:flex-row ">
          <div className=" w-full flex flex-col gap-2 text-sm justify-start items-center whitespace-nowrap ">
            <div className=" w-full flex  justify-between">
              <p className="text-gray-500"> Bitcoin Price</p>
              <p className="font-semibold text-gray-700"> $16,2323.23</p>
            </div>
            <hr className="w-full" />
            <div className=" w-full flex  justify-between">
              <p className="text-gray-500"> 24h Low / 24h High</p>
              <p className="font-semibold text-gray-700"> $45,2323.23</p>
            </div>
            <hr className="w-full" />
            <div className=" w-full flex  justify-between">
              <p className="text-gray-500"> 7d Low / 7d High</p>
              <p className="font-semibold text-gray-700"> $23,232343.23</p>
            </div>
            <hr className="w-full" />
            <div className=" w-full flex  justify-between">
              <p className="text-gray-500"> Trading Volume </p>
              <p className="font-semibold text-gray-700"> $264,424323.23</p>
            </div>
            <hr className="w-full" />

            <div className=" w-full flex  justify-between">
              <p className="text-gray-500"> Market Cap Rank </p>
              <p className="font-semibold text-gray-700"> $2454,564.23</p>
            </div>
            <hr className="w-full" />
          </div>


          <div className=" w-full flex flex-col gap-2 text-sm justify-start items-center whitespace-nowrap ">
            <div className=" w-full flex  justify-between">
              <p className="text-gray-500"> Bitcoin Price</p>
              <p className="font-semibold text-gray-700"> $16,2323.23</p>
            </div>
            <hr className="w-full" />
            <div className=" w-full flex  justify-between">
              <p className="text-gray-500"> 24h Low / 24h High</p>
              <p className="font-semibold text-gray-700"> $45,2323.23</p>
            </div>
            <hr className="w-full" />
            <div className=" w-full flex  justify-between">
              <p className="text-gray-500"> 7d Low / 7d High</p>
              <p className="font-semibold text-gray-700"> $23,232343.23</p>
            </div>
            <hr className="w-full" />
            <div className=" w-full flex  justify-between">
              <p className="text-gray-500"> Trading Volume </p>
              <p className="font-semibold text-gray-700"> $264,424323.23</p>
            </div>
            <hr className="w-full" />

            <div className=" w-full flex  justify-between">
              <p className="text-gray-500"> Market Cap Rank </p>
              <p className="font-semibold text-gray-700"> $2454,564.23</p>
            </div>
            <hr className="w-full" />
          </div>

          


        </div>

      

      </div>

    </div>
  );
}
