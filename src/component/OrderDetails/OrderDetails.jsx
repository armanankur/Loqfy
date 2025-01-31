
import { PackageOpen, Clock4 , PackageCheck, PackageX } from "lucide-react";

const OrderDetails = () => {
  return (
    <div className="flex justify-center items-center gap-4 flex-wrap p-4 rounded-md shadow-md bg-white mt-2">
        <div className="w-full  flex justify-between  items-center p-2">
<p className="text-md text-gray-950 font-semibold">Order Details</p>
<p className="text-md text-purple-700 font-semibold">view all </p>
        </div>
     <Card
        number={"18"}
        orderStatus={"Total Orders"}
        Icon={PackageOpen}
      />
      <Card
        number={"10"}
        orderStatus={"Completed Orders"}
        Icon={Clock4}
      />
      <Card
        number={"5"}
        orderStatus={"Pending Orders"}
        Icon={PackageCheck}
      />
      <Card
        number={"3"}
        orderStatus={"Canceled Orders"}
        Icon={PackageX}
      />
    </div>
  );
};

export default OrderDetails;

const Card = ({ number, orderStatus,Icon }) => {
  return (
    <div className="flex flex-col gap-2 p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/5  rounded-md shadow-md mt-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">{number}</div>
        <div>
        <Icon className="w-6 h-6 text-blue-400 font-extrabold" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-start gap-1">
        <p className="flex gap-2 text-lg font-medium text-gray-500">
          {orderStatus}
        </p>
        <p className="text-green-500 text-xs">+2.4%</p>
      </div>
    </div>
  );
};
