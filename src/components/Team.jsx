import AlsoLike from "./AlsoLike";

export default function Team() {
  return (
    <div className="h-fit p-4 mt-4 bg-white rounded-md">
      <p className="text-lg font-bold flex justify-start items-center">Team</p>

      <div>
        <p className="text-gray-600 text-sm my-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem fuga
          animi, quas voluptas dicta atque delectus asperiores numquam
        </p>
      </div>

      <div className="w-full flex flex-col gap-3 justify-evenly items-center">
        <div className="w-full rounded-md flex flex-col sm:flex-row justify-center items-center p-1 bg-[#E8F4FD]">
          <div className="w-28 flex flex-col items-center justify-center p-2 text-center whitespace-nowrap">
            <img
              src="images/team1.jpeg"
              className="h-24 rounded-xl w-32 object-cover"
              alt=""
            />
            <p className="text-md font-bold mt-4"> John Smith</p>
            <p className="text-xs font-normal text-gray-600">
              {" "}
              Designation here
            </p>
          </div>

          <div className="flex justify-start items-center m-4">
            <p className="text-sm text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ex
              amet officiis voluptas est quae ea tempore inventore recusandae
              fuga odio, esse enim tenetur placeat quo reiciendis, repellat quia
              facere? Delectus, dolorem earum. At nobis ratione vel cupiditate
              officiis rerum. Placeat, voluptate aliquam. Sunt, delectus.
            </p>
          </div>
        </div>
        

        <div className="w-full rounded-md flex flex-col sm:flex-row justify-center items-center p-1 bg-[#E8F4FD]">
          <div className="w-28 flex flex-col items-center justify-center p-2 text-center whitespace-nowrap">
            <img
              src="images/team2.jpeg"
              className="h-24 rounded-xl w-32 object-cover"
              alt=""
            />
            <p className="text-md font-bold mt-4"> Ellianna Villams</p>
            <p className="text-xs font-normal text-gray-600">
              {" "}
              Designation here
            </p>
          </div>

          <div className="flex justify-start items-center m-4">
            <p className="text-sm text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ex
              amet officiis voluptas est quae ea tempore inventore recusandae
              fuga odio, esse enim tenetur placeat quo reiciendis, repellat quia
              facere? Delectus, dolorem earum. At nobis ratione vel cupiditate
              officiis rerum. Placeat, voluptate aliquam. Sunt, delectus.
            </p>
          </div>
        </div>


        <div className="w-full rounded-md flex flex-col sm:flex-row justify-center items-center p-1 bg-[#E8F4FD]">
          <div className="w-28 flex flex-col items-center justify-center p-2 text-center whitespace-nowrap">
            <img
              src="images/team3.jpeg"
              className="h-24 rounded-xl w-32 object-cover"
              alt=""
            />
            <p className="text-md font-bold mt-4"> John Smith</p>
            <p className="text-xs font-normal text-gray-600">
              {" "}
              Designation here
            </p>
          </div>

          <div className="flex justify-start items-center m-4">
            <p className="text-sm text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ex
              amet officiis voluptas est quae ea tempore inventore recusandae
              fuga odio, esse enim tenetur placeat quo reiciendis, repellat quia
              facere? Delectus, dolorem earum. At nobis ratione vel cupiditate
              officiis rerum. Placeat, voluptate aliquam. Sunt, delectus.
            </p>
          </div>
        </div>
       
      </div>
      <AlsoLike />
     
    </div>
  );
}
