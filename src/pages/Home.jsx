import Navbar from "../common/Navbar";
import { FaAngleDoubleRight } from 'react-icons/fa';
import Bitcoin from "../components/Bitcoin";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="h-[100vh] mx-[30px] my-[10px]">
        <p className="text-xs text-normal text-gray-600"> Cryptocurrencies <FaAngleDoubleRight className="h-2 inline" /><span className="text-black text-semibold"> Bitcon</span> </p>

        <div className="sections bg-red-300 h-[50vh] my-[10px] grid grid-cols-6">

            <div className="col-span-4 bg-yellow-500 h-[50vh]">
              <Bitcoin />
            </div>

            <div className="">

            </div>
            


        </div>


      </div>
    </>
  )
}
