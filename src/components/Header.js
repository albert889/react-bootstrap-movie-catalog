import React from "react";
import "./Header.css";
import logo from "../images/Movie Catalog Logo.png";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const Header = () => {
  return (
    <div className="header">
      <div className="header-icons">
        <div className="header-icon header-icon-active">
          <HomeIcon />
          <p>Home</p>
        </div>
      </div>
      <img width={75} alt="logo" src={logo} />
    </div>
  );
};

export default Header;
