import React from 'react';
import './Header.css'
import HeaderOption from './HeaderOption.js'

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notification" />
                <HeaderOption avatar="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg" title="Me" />
            </div>
        </div>
    )
}

export default Header;