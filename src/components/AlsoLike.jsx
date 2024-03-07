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



export default function AlsoLike({ trends }) {
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
      },
    ],
  };

  return (
    <div className="flex flex-col gap-6 sm:absolute left-0 w-full sm:w-[100vw]  p-4 sm:px-[60px]  mt-8 bg-white">
      <p className="text-lg sm:text-xl font-bold flex justify-start items-center">
        You May Also Like
      </p>

      <div className="first h-36 whitespace-nowrap">
        {trends && trends.length > 5 ? (
          <Slider {...settings}>
            {trends.slice(7, 14).map((coin, index) => (
              <div key={index}>
                <div className="rounded-md flex flex-col justify-start p-2 sm:p-4 mr-2 border-0.3  border-gray-200">
                  <div className="flex justify-start items-center gap-2 text-base ">
                    <img
                      src={coin.item.thumb}
                      className="h-5 w-5 sm:h-6 sm:w-6 rounded-full"
                      alt=""
                    />
                    <p className="text-sm sm:text-base font-medium">
                      {coin.item.name}
                    </p>

                    <p
                      className={` flex text-sm  justify-start items-center w-16 rounded-md ${
                        coin.item.data.price_change_percentage_24h.usd.toFixed(
                          3
                        ) > 0
                          ? "bg-green-100 text-green-700 "
                          : "bg-red-100 text-red-700 "
                      }`}
                    >
                      {coin.item.data.price_change_percentage_24h.usd.toFixed(
                        3
                      )}
                      %
                    </p>
                  </div>

                  <div className="text-xs">
                    <p className="text-xs sm:text-lg font-normal mt-2" dangerouslySetInnerHTML={{ __html: coin.item.data.price }}>
                    </p>
                  </div>

                  <div>
                    <img src={coin.item.data.sparkline} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : null}
      </div>

     
      <p className="text-lg sm:text-xl font-bold flex justify-start items-center">
        Trending Coins (24h)
      </p>


      <div className="first h-36 whitespace-nowrap">
        {trends && trends.length > 5 ? (
          <Slider {...settings}>
            {trends.slice(7, 14).map((coin, index) => (
              <div key={index}>
                <div className="rounded-md flex flex-col justify-start p-2 sm:p-4 mr-2 border-0.3  border-gray-200">
                  <div className="flex justify-start items-center gap-2 text-base ">
                    <img
                      src={coin.item.thumb}
                      className="h-5 w-5 sm:h-6 sm:w-6 rounded-full"
                      alt=""
                    />
                    <p className="text-sm sm:text-base font-medium">
                      {coin.item.name}
                    </p>

                    <p
                      className={` flex text-sm  justify-start items-center w-16 rounded-md ${
                        coin.item.data.price_change_percentage_24h.usd.toFixed(
                          3
                        ) > 0
                          ? "bg-green-100 text-green-700 "
                          : "bg-red-100 text-red-700 "
                      }`}
                    >
                      {coin.item.data.price_change_percentage_24h.usd.toFixed(
                        3
                      )}
                      %
                    </p>
                  </div>

                  <div className="text-xs">
                    <p className="text-xs sm:text-lg font-normal mt-2" dangerouslySetInnerHTML={{ __html: coin.item.data.price }}>
                    </p>
                  </div>

                  <div>
                    <img src={coin.item.data.sparkline} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : null}
      </div>

     


    </div>
  );
}
