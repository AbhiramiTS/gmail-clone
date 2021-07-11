import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { useDispatch } from 'react-redux'
import { auth } from './firebase';


function Header() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        });
    };

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                <MenuIcon />
                </IconButton>
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="" />
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search email" type="text" />
                <ArrowDropDownIcon className="header__inputCare" />
            </div>

            <div className="header__right">
                <IconButton >
                <AppsIcon />
                </IconButton>

                <IconButton >
                <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl}>{user?.displayName[0]}</Avatar>
            </div>
        </div>
    )
}

export default Header
