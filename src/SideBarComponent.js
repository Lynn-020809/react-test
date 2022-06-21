import React from "react";
import "./SideBarComponent.css";
import {Breakpoint} from "react-socks";

function SidebarOption({ text, Icon, active }) {
  return (
    <div>
      <Breakpoint large up>
        <div className={`sidebarOption  ${active && "sidebarOption--active"}`}>
          <Icon size={40}/>
          <p>{text}</p>
        </div>
      </Breakpoint>

      <Breakpoint medium>
        <div className={`sidebarOption  ${active && "sidebarOption--active"}`}>
          <Icon size={40}/>
        </div>
      </Breakpoint>

      <Breakpoint small down>
        <div className={`sidebarOption  ${active && "sidebarOption--active"}`}>
          <Icon size={40}/>
        </div>
      </Breakpoint>
    </div>
  );
}

export default SidebarOption;