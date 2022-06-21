import React from 'react';
import SidebarOption from './SideBarComponent.js';
import {MdPersonOutline} from "react-icons/md";
import {RiFileList3Line} from "react-icons/ri";
import {BiIdCard} from "react-icons/bi";
import {MdOutlineMap} from "react-icons/md";
import {RiInboxArchiveLine} from "react-icons/ri";
import "./SideBar.css";

function LeftBar() {
    return (
      <div className="sidebar">
        <SidebarOption Icon={MdPersonOutline} text="Profile" className="smallsidebar"/>
        <SidebarOption Icon={RiFileList3Line} text="Request" className="smallsidebar"/>
        <SidebarOption Icon={BiIdCard} text="Deceased" active={true} className="smallsidebar"/>
        <SidebarOption Icon={MdOutlineMap} text="Map" className="smallsidebar"/>
        <SidebarOption Icon={RiInboxArchiveLine} text="Inbox" className="smallsidebar"/>
      </div>
    );
  }
  
  export default LeftBar;