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

const Header = () => {
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
        <Avatar />
      </div>
    </nav>
  );
};

export default Header;
