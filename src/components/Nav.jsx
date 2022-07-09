import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Logo from "../assets/logo.png";
import { ArrowDropDown } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";

const Nav = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOutUser = () => {
    signOut(auth).then(() => {
      dispatch(logout());
    });
  };
  return (
    <nav>
      <div className="nav--left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link to="/">
          <img src={Logo} id="logo" alt="" />
        </Link>
      </div>
      <div className="nav--mid">
        <SearchIcon />
        <input placeholder="Search in mail" />
        <ArrowDropDown className="nav__input--caret" />
      </div>
      <div className="nav--right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar src={user?.photoURL} onClick={signOutUser} />
      </div>
    </nav>
  );
};

export default Nav;
