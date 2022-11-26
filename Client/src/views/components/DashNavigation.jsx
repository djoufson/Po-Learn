import { Link } from "react-router-dom";
import { GoDeviceDesktop } from "react-icons/go"
import { BsChatLeftText, BsFillBarChartFill } from "react-icons/bs"
import { TbTool } from "react-icons/tb"
import { IoMdHelpCircleOutline } from "react-icons/io"

const DashNavigation = ({changeTab}) => {
  return ( 
    <>
      <div className="dashboard">
        <h1><Link to="/">PoLearn</Link></h1>
        <ul>
          <li><button onClick={ () => {changeTab(0)} }><GoDeviceDesktop/> Courses</button></li>
          <li><button onClick={ () => {changeTab(1)} }><BsChatLeftText/> Communication</button></li>
          <li><button onClick={ () => {changeTab(2)} }><BsFillBarChartFill/> Performances</button></li>
          <li><button onClick={ () => {changeTab(3)} }><TbTool/> Tools</button></li>
          <li><button onClick={ () => {changeTab(4)} }><IoMdHelpCircleOutline/> Resources</button></li>
        </ul>
      </div>
    </>
   );
}

export default DashNavigation;