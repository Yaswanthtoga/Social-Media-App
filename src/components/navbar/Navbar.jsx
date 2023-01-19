import React, { useContext } from 'react'
import "./Navbar.scss";
import Home from '@mui/icons-material/HomeOutlined';
import DarkMode from '@mui/icons-material/DarkModeOutlined';
import LightMode from '@mui/icons-material/LightModeOutlined';
import GridView from '@mui/icons-material/GridViewOutlined';
import Notifications from '@mui/icons-material/NotificationsActiveOutlined';
import Email from '@mui/icons-material/EmailOutlined';
import Person from '@mui/icons-material/PersonOutlineOutlined';
import Search from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

const Navbar = () => {
  const {toggle,darkMode} = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}><span>Socio World.</span></Link>
        <Home style={{cursor:"pointer"}}/>
        {!darkMode?<DarkMode onClick={()=>toggle()} style={{cursor:"pointer"}}/>:<LightMode onClick={()=>toggle()} style={{cursor:"pointer"}}/>}
        <GridView style={{cursor:"pointer"}}/>
        <div className="search">
          <Search/>
          <input type="text" placeholder='search'/>
        </div>
      </div>
      <div className="right">
        <Person style={{cursor:"pointer"}}/>
        <Email style={{cursor:"pointer"}}/>
        <Notifications style={{cursor:"pointer"}}/>
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar