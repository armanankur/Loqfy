import React from "react";
import FrequentlyUsed from "../FrequentlyUsed/FrequentlyUsed";
import OrderDetails from "../OrderDetails/OrderDetails";
import AllCount from "../AllCount/AllCount";

const RightSidebar = () => {
  return (
    <div className="w-3/4 h-auto p-2  bg-slate-100">
      <FrequentlyUsed />
      <OrderDetails />
      <AllCount />
    </div>
  );
};

export default RightSidebar;
