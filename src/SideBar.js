import React from 'react';
import SidebarOption from './SideBarComponent.js';
import {MdPersonOutline} from "react-icons/md";
import {RiFileList3Line} from "react-icons/ri";
import {FaRegIdCard} from "react-icons/fa";
import {MdOutlineMap} from "react-icons/md";
import {RiInboxArchiveLine} from "react-icons/ri";
import "./SideBar.css";

function Sidebar() {
    return (
      <div className="sidebar">
        <SidebarOption Icon={MdPersonOutline} text="Profile" />
        <SidebarOption Icon={RiFileList3Line} text="Request" />
        <SidebarOption Icon={FaRegIdCard} text="Deceased Information" active={true} />
        <SidebarOption Icon={MdOutlineMap} text="Map" />
        <SidebarOption Icon={RiInboxArchiveLine} text="Inbox" />
      </div>
    );
  }
  
  export default Sidebar;