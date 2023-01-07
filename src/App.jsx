import React, { Component, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import styled from "@emotion/styled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, themeDark, themeLight } from "./utils/theme";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import "./css/App.css";
import { CssBaseline } from "@mui/material";
import { Provider, useDispatch } from "react-redux";
import store from "./app/store";
import { switchTheme } from "./reduxFeatures/appTheme";
import SignIn from "./pages/SignIn";
const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  &::selection {
    border: 1px solid white;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  height: 100%;
  background-color: ${({ theme }) => theme.bg};
`;
const MainWrapper = styled.div`
  margin-left: 15vw;
  flex: 1;
`;
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const updateTheme = () => {
    document.getElementById("contentWrap").style.backgroundColor = isDarkTheme
      ? themeDark.bgDark
      : themeLight.bgDark;
  };
  const switchTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  useEffect(() => {
    updateTheme();
  }, [switchTheme]);
  return (
    <Provider store={store}>
      <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
        <CssBaseline />
        <BrowserRouter>
          <Container>
            <Navbar />
            <ContentWrapper id="contentWrap">
              <Menu switchTheme={switchTheme} />
              <MainWrapper>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                  <Route path="/signin" element={<SignIn />} />
                </Routes>
              </MainWrapper>
            </ContentWrapper>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}
export default App;
