import React from "react";
import Deceased from './deceased.js';
import Header from "./navbar.js";
import Sidebar from "./SideBar.js";
import Feed from "./detailPage.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <Deceased />
      </div>
    </div>
  );
} export default App;
