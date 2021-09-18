import React, { useState} from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


import { FaList, FaRegHeart, FaGem, FaBorderAll } from "react-icons/fa";
import {BsArrowLeft, BsArrowRight, BsGrid} from "react-icons/bs"
import { IconContext } from 'react-icons/lib';
import "./Header.css"
const SideBar = () => {
    const [menuCollapse, setMenuCollapse] = useState(false);

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <div className="d-flex flex-row">
            <div>
                <ProSidebar collapsed={menuCollapse} >
                    <SidebarHeader >
                        <div className="logotext">
                            <p>{menuCollapse? "Logo" : "Big Logo"}</p>
                        </div>
                        <div className="closeMenu container" onClick={menuIconClick}>
                            {menuCollapse ? (
                                    <div className="bg-primary position-absolute top-0 end-0">
                                        <BsArrowRight />
                                    </div>
                                
                            ): (
                                <div className="bg-primary position-absolute top-0 end-0">
                                <BsArrowLeft/>
                                    </div>
                                
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                    <Menu iconShape="square">
                        <IconContext.Provider value={{ size: "2rem"}}>
                        <MenuItem active={true}  icon={<BsGrid/>}>
                            <text className="text-white mb-2">DashBoard</text></MenuItem>
                        <SubMenu  title="Components" icon={<BsGrid />} >
                            <MenuItem>compo 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                        <MenuItem   icon={<BsGrid/>}>
                            <text className="text-white mb-2">DashBoard</text></MenuItem>
                        <SubMenu  title="Componensubts" icon={<BsGrid />} >
                            <MenuItem>Componet 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                        <MenuItem  icon={<BsGrid/>}>
                            <text className="text-white mb-2">DashBoard</text></MenuItem>
                        <SubMenu  title="Components" icon={<BsGrid />} >
                            <MenuItem>Componet 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                        </IconContext.Provider>
                        
                        
                    </Menu>
                    </SidebarContent>   
                </ProSidebar> 
            </div>
        </div>
    );
}

export{
    SideBar
}
