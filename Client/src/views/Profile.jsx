import { useState } from "react";
import DashNavigation from "./components/DashNavigation";
import DashAside from "./components/DashAside";
import Downloads from "./ProfileTabs/Downloads"
import Uploads from "./ProfileTabs/Uploads"
import useLoad from "../utilities/hooks/useLoad";

const Profile = () => {
  useLoad()
  const tabs = [
    Uploads,
    Downloads
  ]

  const [currTab, setCurrTab] = useState(tabs[0])
  const changeTab = (index) => {
    setCurrTab(tabs[index])
  }
  return ( 
  <>
  <div className="profile-page">
    <DashNavigation changeTab={ changeTab }/>
    <DashAside currTab={ currTab }/>
  </div>
  </> 
  );
}

export default Profile;