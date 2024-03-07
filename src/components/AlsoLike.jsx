/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ]
  };

  return (
    <div className="flex sm:px-10 flex-col gap-4 sm:absolute left-0 w-full sm:w-[100vw]  p-4 mt-8 bg-white">
      <p className="text-lg font-bold flex justify-start items-center">
        You May Also Like
      </p>

      <div className="first h-30 ">
        <Slider {...settings}>
          <div>
            <div className="rounded-md flex flex-col justify-start p-2 sm:p-4 mr-2 border-0.3  border-gray-200">

              <div className="flex justify-start items-center gap-1 text-base ">
                <img
                  src="images/bitcoin.svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 rounded-full"
                  alt=""
                />
                <p className="text-sm sm:text-lg font-medium"> Bitcoin</p>

                <p className=" text-green-800 flex text-xs sm:text-sm justify-center items-center px-1 rounded-md">
                  {" "}
                  2.52%
                </p>
              </div>

              <div className="text-xs">
                <p className="text-sm sm:text-lg font-semibold"> $46,953.04</p>
              </div>

              <div>
                <img src="images/graph1.png" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-md flex flex-col justify-start p-2 sm:p-4 mr-2 border-0.3  border-gray-200">

              <div className="flex justify-start items-center gap-1 text-base ">
                <img
                  src="images/bitcoin.svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 rounded-full"
                  alt=""
                />
                <p className="text-sm sm:text-lg font-medium"> Bitcoin</p>

                <p className=" text-green-800 flex text-xs sm:text-sm justify-center items-center px-1 rounded-md">
                  {" "}
                  2.52%
                </p>
              </div>

              <div className="text-xs">
                <p className="text-sm sm:text-lg font-semibold"> $46,953.04</p>
              </div>

              <div>
                <img src="images/graph1.png" alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-md flex flex-col justify-start p-2 sm:p-4 mr-2 border-0.3  border-gray-200">

              <div className="flex justify-start items-center gap-1 text-base ">
                <img
                  src="images/bitcoin.svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 rounded-full"
                  alt=""
                />
                <p className="text-sm sm:text-lg font-medium"> Bitcoin</p>

                <p className=" text-green-800 flex text-xs sm:text-sm justify-center items-center px-1 rounded-md">
                  {" "}
                  2.52%
                </p>
              </div>

              <div className="text-xs">
                <p className="text-sm sm:text-lg font-semibold"> $46,953.04</p>
              </div>

              <div>
                <img src="images/graph1.png" alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-md flex flex-col justify-start p-2 sm:p-4 mr-2 border-0.3  border-gray-200">

              <div className="flex justify-start items-center gap-1 text-base ">
                <img
                  src="images/bitcoin.svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 rounded-full"
                  alt=""
                />
                <p className="text-sm sm:text-lg font-medium"> Bitcoin</p>

                <p className=" text-green-800 flex text-xs sm:text-sm justify-center items-center px-1 rounded-md">
                  {" "}
                  2.52%
                </p>
              </div>

              <div className="text-xs">
                <p className="text-sm sm:text-lg font-semibold"> $46,953.04</p>
              </div>

              <div>
                <img src="images/graph1.png" alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-md flex flex-col justify-start p-2 sm:p-4 mr-2 border-0.3  border-gray-200">

              <div className="flex justify-start items-center gap-1 text-base ">
                <img
                  src="images/bitcoin.svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 rounded-full"
                  alt=""
                />
                <p className="text-sm sm:text-lg font-medium"> Bitcoin</p>

                <p className=" text-green-800 flex text-xs sm:text-sm justify-center items-center px-1 rounded-md">
                  {" "}
                  2.52%
                </p>
              </div>

              <div className="text-xs">
                <p className="text-sm sm:text-lg font-semibold"> $46,953.04</p>
              </div>

              <div>
                <img src="images/graph1.png" alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="second h-30 ">
      <Slider {...settings}>
          <div>
            <div className="rounded-md flex flex-col justify-start p-2 sm:p-4 mr-2 border-0.3  border-gray-200">

              <div className="flex justify-start items-center gap-1 text-base ">
                <img
                  src="images/bitcoin.svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 rounded-full"
                  alt=""
                />
                <p className="text-sm sm:text-lg font-medium"> Bitcoin</p>

                <p className=" text-green-800 flex text-xs sm:text-sm justify-center items-center px-1 rounded-md">
                  {" "}
                  2.52%
                </p>
              </div>

              <div className="text-xs">
                <p className="text-sm sm:text-lg font-semibold"> $46,953.04</p>
              </div>

              <div>
                <img src="images/graph1.png" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-md flex flex-col justify-start p-2 sm:p-4 mr-2 border-0.3  border-gray-200">

              <div className="flex justify-start items-center gap-1 text-base ">
                <img
                  src="images/bitcoin.svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 rounded-full"
                  alt=""
                />
                <p className="text-sm sm:text-lg font-medium"> Bitcoin</p>

                <p className=" text-green-800 flex text-xs sm:text-sm justify-center items-center px-1 rounded-md">
                  {" "}
                  2.52%
                </p>
              </div>

              <div className="text-xs">
                <p className="text-sm sm:text-lg font-semibold"> $46,953.04</p>
              </div>

              <div>
                <img src="images/graph1.png" alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-md flex flex-col justify-start p-2 sm:p-4 mr-2 border-0.3  border-gray-200">

              <div className="flex justify-start items-center gap-1 text-base ">
                <img
                  src="images/bitcoin.svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 rounded-full"
                  alt=""
                />
                <p className="text-sm sm:text-lg font-medium"> Bitcoin</p>

                <p className=" text-green-800 flex text-xs sm:text-sm justify-center items-center px-1 rounded-md">
                  {" "}
                  2.52%
                </p>
              </div>

              <div className="text-xs">
                <p className="text-sm sm:text-lg font-semibold"> $46,953.04</p>
              </div>

              <div>
                <img src="images/graph1.png" alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-md flex flex-col justify-start p-2 sm:p-4 mr-2 border-0.3  border-gray-200">

              <div className="flex justify-start items-center gap-1 text-base ">
                <img
                  src="images/bitcoin.svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 rounded-full"
                  alt=""
                />
                <p className="text-sm sm:text-lg font-medium"> Bitcoin</p>

                <p className=" text-green-800 flex text-xs sm:text-sm justify-center items-center px-1 rounded-md">
                  {" "}
                  2.52%
                </p>
              </div>

              <div className="text-xs">
                <p className="text-sm sm:text-lg font-semibold"> $46,953.04</p>
              </div>

              <div>
                <img src="images/graph1.png" alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-md flex flex-col justify-start p-2 sm:p-4 mr-2 border-0.3  border-gray-200">

              <div className="flex justify-start items-center gap-1 text-base ">
                <img
                  src="images/bitcoin.svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 rounded-full"
                  alt=""
                />
                <p className="text-sm sm:text-lg font-medium"> Bitcoin</p>

                <p className=" text-green-800 flex text-xs sm:text-sm justify-center items-center px-1 rounded-md">
                  {" "}
                  2.52%
                </p>
              </div>

              <div className="text-xs">
                <p className="text-sm sm:text-lg font-semibold"> $46,953.04</p>
              </div>

              <div>
                <img src="images/graph1.png" alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </div>


    </div>
  );
}
