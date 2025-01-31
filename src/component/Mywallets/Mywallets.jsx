import { Wallet } from "lucide-react";
import { IndianRupee } from "lucide-react";
const Mywallets = () => {
  return (
    <div className="flex flex-col gap-4 p-4 w-full  bg-white rounded-md shadow-lg   flex-wrap  mt-2 ">
      <div className="flex justify-between items-center ">
        <div className="text-md font-semibold  ">My Wallet</div>

        <div>
          <Wallet  className="text-violet-800 "  />
        </div>
      </div>

      <div className="flex flex-col justify-center items-start gap-1">
        <p className="flex gap-2  text-2xl font-bold">
          {" "}
          <span >
            <IndianRupee  size={28}  className="font-bold"  />
          </span>{" "}
          2,50,000
        </p>
        <p className="text-gray-500"> current Balance</p>
        <p className="text-sm font-semibold ">
          Running low ? <span className="underline text-violet-600 font-bold">Notify admin</span> now.
        </p>
      </div>
    </div>
  );
};
 
export default Mywallets;
