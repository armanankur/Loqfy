import RightSidebar from "../RightSidebar/RightSidebar";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex justify-between gap-0 items-center flex-wrap">
      <Sidebar />
      <RightSidebar />
    </div>
  );
};

export default Dashboard;
