import { FaLongArrowAltRight } from "react-icons/fa";

function AboutBitcoin() {
  return (
    <div className="h-fit p-4 mt-4 bg-white rounded-md">
      <p className="text-lg font-bold flex justify-start items-center">
        About Bitcoin
      </p>

      <div>
        <p className="text-gray-900 font-bold text-base py-2">
          What is Bitcoin?
        </p>
        <p className="text-gray-600 text-sm">
          {" "}
          Bitcoin is a decentralized digital currency, without a central bank or
          single administrator, that can be sent from user to user on the
          peer-to-peer bitcoin network without the need for intermediaries.
          Transactions are verified by network nodes through cryptography and
          recorded in a public distributed ledger called a blockchain. Bitcoin
          was invented in 2008 by an unknown person or group of people using the
          name Satoshi Nakamoto. The currency began use in 2009 when its
          implementation was released as open-source software.{" "}
        </p>
        <br />
        <hr />
      </div>

      <div>
        <p className="text-gray-900 font-bold text-base py-2">
          Lorem ipsum dolor sit
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente
          rerum molestias impedit quidem nobis, laudantium recusandae minima
          totam saepe.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, saepe?
        </p>
        <p className="text-gray-600 text-sm mb-4">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem fuga
          animi, quas voluptas dicta atque delectus asperiores numquam
          laboriosam. Dignissimos sunt dolores ipsa atque debitis quo quae alias
          quas nisi?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium nesciunt consequuntur beatae et fugit vel.
        </p>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          omnis aliquam repellendus. Cumque nisi repellendus non laudantium
          sequi, dolorem laborum molestias voluptatem! Aliquid, dignissimos
          vero.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, iusto!
        </p>
        <br />
        <hr />
      </div>

      <div className="w-full">
        <p className="text-gray-900 font-bold text-lg py-4">
          Already Holding Bitcoin
        </p>

        <div className="w-full flex flex-col lg:flex-row gap-3 justify-evenly items-center">
          <div className="w-[90%] lg:w-[45%] rounded-md flex p-2 bg-gradient-to-r from-green-300 to-teal-800">
            <img
              src="images/mobile1.jpeg"
              className="rounded-lg w-[45%] h-32 object-cover mr-4"
              alt=""
            />

            <div className="flex flex-col justify-between">
              <p className="font-bold text-lg text-white">
                Calculate your Profit
              </p>

              <button className="p-2 w-fit text-sm bg-white rounded-md text-black whitespace-nowrap">
                Check Now <FaLongArrowAltRight className="inline" />
              </button>
            </div>
          </div>

          <div className="w-[90%] lg:w-[45%] rounded-md flex p-2 bg-gradient-to-r from-orange-300 to-orange-700">
            <img
              src="images/mobile2.jpeg"
              className="rounded-lg w-[45%] h-32 object-cover mr-4"
              alt=""
            />

            <div className="flex flex-col justify-between">
              <p className="font-bold text-lg text-white">
                Calculate your tax liability
              </p>

              <button className="p-2 w-fit text-sm bg-white rounded-md text-black whitespace-nowrap">
                Check Now <FaLongArrowAltRight className="inline" />
              </button>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm my-4">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem fuga
          animi, quas voluptas dicta atque delectus asperiores numquam
          laboriosam. Dignissimos sunt dolores ipsa atque debitis quo quae alias
          quas nisi.Accusamus
          omnis aliquam repellendus. Cumque nisi repellendus non laudantium
          sequi, dolorem laborum molestias voluptatem! Aliquid, dignissimos
          vero.
        </p>

        <br />
        <hr />
      </div>
    </div>
  );
}

export default AboutBitcoin;
