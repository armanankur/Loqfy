import Mywallets from "../Mywallets/Mywallets"
import PendingActions from "../PendingActions/PendingActions"
import WelcomeBanner from "../WelcomeBanner/WelcomeBanner"


const Sidebar = () => {
  return (
    <div className="w-full lg:w-1/4 bg-slate-100 h-auto p-2 ">
  <WelcomeBanner/>
  <Mywallets/>
  <PendingActions/>
    </div>
  )
}

export default Sidebar