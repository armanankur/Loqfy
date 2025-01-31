
import "./App.css";

import Dashboard from "./component/Dashboard/Dashboard";

import Navbar from "./component/Navbar/Navbar";
import Calender from "./component/Calender/Calender";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <div className=" w-[100vw] h-[100vh]">
        <Navbar />
        <Dashboard />
      <Footer/>
      </div>
    </>
  );
}

export default App;
