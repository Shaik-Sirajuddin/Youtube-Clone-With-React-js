import React, { Component } from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistorySharpIcon from "@mui/icons-material/HistorySharp";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../reduxFeatures/appTheme";
import { Link } from "react-router-dom";

const MenuWrapper = styled.div`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.bg};
  position: fixed;
  overflow-y: scroll;
  transition: 0.5s;
  width: 15vw;
`;
const MenuItem = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 8px 10px 8px 20px;
  font-size: medium;
  gap: 20px;
  &:hover {
    background-color: ${({ theme }) => theme.bgLight};
  }
`;
const Hr = styled.hr`
  margin: 10px 20px;
  border: 0.5px solid #373737;
`;
const SignInWrapper = styled.div`
  color: ${({ theme }) => theme.text};
  gap: 5px;
  display: flex;
  flex-flow: column;
  font-size: medium;
  padding: 5px 10px 5px 20px;
`;
const SignInButton = styled.div`
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  border-radius: 2px;
  padding: 6px 12px;
  gap: 3px;
`;
const BestText = styled.div`
  color: ${({ theme }) => theme.textLight};
  font-weight: 600;
  padding: 5px 10px 5px 20px;
`;
function Menu(props) {
  const dispatch = useDispatch();
  return (
    <MenuWrapper>
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <MenuItem>
          <HomeIcon />
          Home
        </MenuItem>
      </Link>
      <MenuItem>
        <ExploreOutlinedIcon />
        Explore
      </MenuItem>
      <MenuItem>
        <SubscriptionsOutlinedIcon />
        Subscriptions
      </MenuItem>
      <Hr />
      <MenuItem>
        <VideoLibraryOutlinedIcon />
        Library
      </MenuItem>
      <MenuItem>
        <HistorySharpIcon />
        History
      </MenuItem>
      <Hr />
      <SignInWrapper>
        Sign in to like videos,
        <br /> comment and subscribe.
        <br />
        <Link
          to="signin"
          style={{
            textDecoration: "none",
          }}
        >
          <SignInButton>
            <AccountCircleOutlinedIcon />
            Sign In
          </SignInButton>
        </Link>
      </SignInWrapper>
      <Hr />
      <BestText>BEST OF YUUTUBE</BestText>
      <MenuItem>
        <LibraryMusicOutlinedIcon />
        Music
      </MenuItem>
      <MenuItem>
        <SportsBasketballOutlinedIcon />
        Sports
      </MenuItem>
      <MenuItem>
        <SportsEsportsOutlinedIcon />
        Gaming
      </MenuItem>
      <MenuItem>
        <MovieCreationOutlinedIcon />
        Movies
      </MenuItem>
      <MenuItem>
        <ArticleOutlinedIcon />
        News
      </MenuItem>
      <MenuItem>
        <LiveTvOutlinedIcon />
        Live
      </MenuItem>
      <Hr />
      <MenuItem>
        <SettingsOutlinedIcon />
        Settings
      </MenuItem>
      <MenuItem>
        <FlagOutlinedIcon />
        Report
      </MenuItem>
      <MenuItem>
        <HelpOutlineOutlinedIcon />
        Help
      </MenuItem>
      <MenuItem
        onClick={() => {
          dispatch(switchTheme());
          props.switchTheme();
        }}
      >
        <SettingsBrightnessOutlinedIcon />
        LightMode
      </MenuItem>
      <MenuItem>
        <HelpOutlineOutlinedIcon />
        Help
      </MenuItem>
      <MenuItem>
        <HelpOutlineOutlinedIcon />
        Help
      </MenuItem>
    </MenuWrapper>
  );
}

export default Menu;
