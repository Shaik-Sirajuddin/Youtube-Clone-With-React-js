import React, { Component } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IconButton } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
const Container = styled.nav`
  background: ${({ theme }) => theme.bg};
  flex: 0 1 60px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: sticky;
  top: 0px;
  z-index: 1;
`;
const Input = styled.input`
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 1px;
  padding-bottom: 1px;
  font-size: 16px;
  width: 90%;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.bg};
  border-radius: 1px;
  height: 35px;
  border: none;
  &:focus {
    outline: none;
    border: 1px solid #1c62c9;
  }
`;
const SearchWapper = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.bgLight};
`;
const LogoName = styled.div`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  font-size: large;
  letter-spacing: 0;
  margin: 0px;
`;
const IconWrapper = styled.div`
  color: ${({ theme }) => theme.text};
  margin-left: 10px;
  margin-top: 3px;
  cursor: pointer;
`;
class Nabar extends Component {
  render() {
    return (
      <Container>
        <IconWrapper>
          <MenuOutlinedIcon />
        </IconWrapper>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <YouTubeIcon
            sx={{
              color: "red",
              marginLeft: "20px",
              marginRight: "4px",
              transform: "scale(1.4)",
              cursor: "pointer",
            }}
          />
          <LogoName>Yuutube</LogoName>
        </Link>
        <SearchWapper>
          <Input placeholder="Search" type="text" />
          <IconWrapper>
            <SearchOutlinedIcon />
          </IconWrapper>
        </SearchWapper>
      </Container>
    );
  }
}

export default Nabar;
