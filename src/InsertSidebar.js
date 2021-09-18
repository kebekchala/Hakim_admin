import React, { useContext} from 'react';
import { MenuItem } from 'react-pro-sidebar';
import handleSidebar from './handleSidebar';


import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine  } from "react-icons/ri";
import {AiFillCheckSquare} from "react-icons/ai"
const InsertSidebar = () =>{
    const {currentHeadbar,setCurrentHeadbar} = useContext(handleSidebar);
    const handleReport = () => setCurrentHeadbar('report')
    const handleVerify = () => setCurrentHeadbar('veriy');

    return(
        <>
        <MenuItem  onClick={handleVerify} active={currentHeadbar === "verify" ? true : false} icon={<AiFillCheckSquare />}>
          <button>verification</button>
        </MenuItem>
        <MenuItem onClick={handleReport} active={currentHeadbar === "report" ? true : false} icon={<FaList />}>Report</MenuItem>
        </>
     
    )
}

export default InsertSidebar;