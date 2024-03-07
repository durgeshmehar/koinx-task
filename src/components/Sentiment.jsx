/* eslint-disable react/prop-types */
import Ibutton from "../common/Ibutton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChartLine, FaNewspaper, FaBook } from "react-icons/fa";

// Custom arrow components
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "rgb(209 213 219)",
        borderRadius: "50vw",
        marginInline: "4vw",
        color: "green",
        fontSize: "2rem",
        scale: "1.5",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: 100,
        background: "rgb(209 213 219)",
        borderRadius: "50vw",
        marginInline: "4vw",
        color: "green",
        fontSize: "2rem",
        scale: "1.5",
      }}
      onClick={onClick}
    />
  );
}

export default function Sentiment() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      
    ]
  };

  return (
    <div className="h-fit p-4 mt-4 bg-white rounded-md">
      <div className="">
        <p className="text-lg  sm:text-xl font-bold flex justify-start items-center">
          {" "}
          Sentiment{" "}
        </p>

        <p className="text-base text-gray-700 py-4 font-semibold flex justify-start items-center">
          Key Events &nbsp; <Ibutton />{" "}
        </p>
        <div className="">
          <Slider {...settings}>
            <div>
              <div className="flex flex-row bg-[#e8f4fd] p-4 mr-2">
                <div className=" w-8 bg-blue-600 h-8 flex justify-center items-center rounded-full mr-2">
                  <FaChartLine className="w-8  text-white " />
                </div>

                <div className="inline-block w-[90%]">
                  <p className="text-gray-900 mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt distinctio fugit minima!
                  </p>

                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt distinctio fugit minima!Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Incidunt distinctio fugit
                    minima!
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-row bg-[#ebf9f4] p-4 mr-2">
                <div className=" w-8 bg-green-500 h-8 flex justify-center items-center rounded-full mr-2">
                  <FaNewspaper className="w-8  text-white " />
                </div>

                <div className="inline-block w-[90%]">
                  <p className="text-gray-900 mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt distinctio fugit minima!
                  </p>

                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt distinctio fugit minima!Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Incidunt distinctio fugit
                    minima!
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-row bg-[#f8f2f2] p-4 mr-2">
                <div className=" w-8 bg-[#868181] h-8 flex justify-center items-center rounded-full mr-2">
                  <FaBook className="w-8  text-white " />
                </div>

                <div className="inline-block w-[90%]">
                  <p className="text-gray-900 mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt distinctio fugit minima!
                  </p>

                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt distinctio fugit minima!Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Incidunt distinctio fugit
                    minima!
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-base text-gray-700 py-4 font-semibold flex justify-start items-center">
          Analyst Estimates &nbsp; <Ibutton />
        </p>

        <div className="flex">

          <div className="p-8 py-9 bg-[#ebf9f4] rounded-full flex justify-center items-center text-2xl font-bold text-green-500">
            76 <span className="text-xs"> &nbsp;%</span>
          </div>

          <div className="flex flex-col gap-4 w-full ml-4">

            <div className="flex gap-4 w-full  items-center justify-start whitespace-nowrap text-sm">
              <p className="text-gray-400"> Buy </p>
              <div className="col-span-4 h-1.5 rounded-md bg-green-700 w-[76%]"></div>
              <p className="text-gray-500"> 76% </p>
            </div>

            <div className="flex gap-4 w-full  items-center justify-start whitespace-nowrap text-sm">
              <p className="text-gray-500"> Hold </p>
              <div className="col-span-4 w-[8%] h-1.5 rounded-md bg-gray-400"></div>
              <p className="text-gray-500"> 8% </p>
            </div>

            <div className="flex gap-4 w-full  items-center justify-start whitespace-nowrap text-sm">
              <p className="text-gray-500"> Sell </p>
              <div className="col-span-4 w-[16%] h-1.5 rounded-md bg-red-400"></div>
              <p className="text-gray-500"> 16%</p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}
