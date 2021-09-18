
//import useState hook to create menu collapse state
import React, { useState, useContext } from "react";
import app from "../firebase"
import InsertSidebar from "../InsertSidebar";
import CardTable from "./CardTable";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  SubMenu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine  } from "react-icons/ri";
import {AiFillCheckSquare} from "react-icons/ai"
import { BsGrid} from "react-icons/bs"
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = (props) => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)
    const [chooseSide, setChooseSide] = useState(true);
    const [currentHeadbar, setCurrentHeadbar] = useState(InsertSidebar)
    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const handleSidebarChoose = (choice) => {
    setChooseSide(choice)
  }
  
  return (
    <div style={{ width: "90%" }} className="d-flex flex-row">
        <div className="p3 header">
        <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p className="align-left">{menuCollapse ? "Hakim" : "Hakim "}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>  
          </SidebarHeader>
          <SidebarContent>
              
            <Menu iconShape="square">
              <>
              <MenuItem onClick={() => {handleSidebarChoose("verify")}} active={chooseSide === "verify" ? true : false} icon={<AiFillCheckSquare />}>
                <button>verification</button>
              </MenuItem>
              <MenuItem onClick={() => {handleSidebarChoose("report")}} active={chooseSide === "report" ? true : false} icon={<FaList />}>Report</MenuItem>
              
              </>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem onClick={() => app.auth().signOut()} icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
        
          </SidebarFooter>
        </ProSidebar>
      </div>
        </div>
        <div className="d-flex flex-column p4">
          <CardTable val={chooseSide} />
        </div>
      </div>
      
  );
};

export { Header};
