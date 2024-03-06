/* eslint-disable react/prop-types */
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


export default function AlsoLike() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className=" sm:absolute left-0 w-[100vw] p-4 mt-8 bg-red-300 ">
      <p className="text-lg font-bold flex justify-start items-center">
        You May Also Like
      </p>


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
  );
}
