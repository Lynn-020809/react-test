import React from "react";
import Deceased from './deceased.js';
import Navbar from "./navbar.js";
import LeftBar from "./SideBar.js";
import FloatingActionButtons from "./Fab.js";
import Feed from "./detailPage.js";
import LabelBottomNavigation from "./BottomNavigation.js";
import {BreakpointProvider, Breakpoint} from "react-socks";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import successToast from "./SuccessToast.js";
import './App.css';

function DeceasedInfoPage() {
  return (<div className="subblock-middle">
  <div className="box-top"> Deceased Information </div> 
  <div className="box-middle"> 
      <Deceased /> 
  </div>
  <FloatingActionButtons className="fab"/>
  <div className="box-bottom">
    <LabelBottomNavigation style={"display: none"}/>
  </div>
</div>);
}

function DetailedInfoPage() {
  return (<div className="subblock-middle">
  <div className="box-top"> <KeyboardBackspaceIcon className="return-icon" style={{fontSize: '32px'}}/> </div> 
    <div className="box-middle"> 
      <Feed /> 
    </div>
  <div className="box-bottom">
    <LabelBottomNavigation style={"display: none"}/>
  </div>
</div>);
}

function App() {
  return (
    <body>

      <div className="block-top">
        <Navbar />
      </div>

      <div className="block-bottom">
        <div className="subblock-left">
            <div className="left-bar"> 
              <BreakpointProvider>
                <LeftBar /> 
              </BreakpointProvider>
            </div>
        </div>

       <DeceasedInfoPage /> 

        <div className="subblock-right">
          <div className="right-bar"></div>
        </div>
      </div>

    </body>
  );
} export default App;
