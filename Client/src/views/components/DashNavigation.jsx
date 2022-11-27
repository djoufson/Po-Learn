import { Link } from "react-router-dom";
import { GoDeviceDesktop } from "react-icons/go"
import { BsChatLeftText, BsFillBarChartFill } from "react-icons/bs"
import { TbTool } from "react-icons/tb"
import { IoMdHelpCircleOutline } from "react-icons/io"
import appIcon from "../../assets/appicon.png"

const DashNavigation = ({changeTab}) => {
  const handleChangeTab = (e, index) => {
    let i = 0
    while(e.nodeName !== "BUTTON" && i < 3){
      e = e.parentElement
      console.log(e)
      i++;
    }
    const prevActive = document.querySelector(".dashboard button.active")
    const currentActive = e

    if(prevActive != null){
      prevActive.classList.remove("active")
    }

    currentActive.classList.add("active")
    changeTab(index)
  }

  return ( 
    <>
      <div className="dashboard">
        <h1>
          <Link to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
            <img width="50px" src={ appIcon } alt="" style={{marginLeft: '5px'}}/>
            <span>PoLearn</span>
          </Link>
        </h1>
        <ul>
          <li><button className="active" onClick={ (e) => {handleChangeTab(e.target, 0)} }><GoDeviceDesktop/> <span>Courses</span></button></li>
          <li><button onClick={ (e) => {handleChangeTab(e.target, 1)} }><BsChatLeftText/> <span>Communication</span></button></li>
          <li><button onClick={ (e) => {handleChangeTab(e.target, 2)} }><BsFillBarChartFill/> <span>Performances</span></button></li>
          <li><button onClick={ (e) => {handleChangeTab(e.target, 3)} }><TbTool/> <span>Tools</span></button></li>
          <li><button onClick={ (e) => {handleChangeTab(e.target, 4)} }><IoMdHelpCircleOutline/> <span>Resources</span></button></li>
        </ul>
      </div>
    </>
   );
}

export default DashNavigation;