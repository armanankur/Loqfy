import FrequentlyUsed from "../FrequentlyUsed/FrequentlyUsed";
import OrderDetails from "../OrderDetails/OrderDetails";
import AllCount from "../AllCount/AllCount";
import Calender from "../Calender/Calender";

const RightSidebar = () => {
  return (
    <div className="w-full  lg:w-3/4 h-auto p-2  bg-slate-100">
      <FrequentlyUsed />
      <Calender/>
      <OrderDetails />
      <AllCount />
    </div>
  );
};

export default RightSidebar;
