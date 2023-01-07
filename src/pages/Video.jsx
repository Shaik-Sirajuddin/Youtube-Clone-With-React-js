import { Card, Input } from "@mui/material";
import React, { Component } from "react";
import styled from "styled-components";
import SuggestionCard from "../components/SuggestionCard";
import "../css/Video.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import Comment from "../components/Comment";
import { useSelector } from "react-redux";
const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
`;
const MainContentWrapper = styled.div`
  padding: 10px 20px 10px 40px;
  width: 59vw;
`;
const SuggestionsWrapper = styled.div`
  padding: 10px 40px 10px 0px;
  width: 25vw;
`;
const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  /* 16:9 */
  padding-top: 25px;
  height: 0;
`;
const VideoTitle = styled.h1`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const DataAndActionsWrapper = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: flex-end;
`;
const Action = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  cursor: pointer;
  align-items: center;
  border-radius: 3px;
  padding: 5px 7px 5px 7px;
  margin-left: 3px;
  margin-right: 3px;
  gap: 5px;
  font-size: 14px;
  font-weight: 600;
  &:hover {
    background-color: ${({ theme }) => theme.bgLight};
  }
`;
const ChannelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;
const Subscribe = styled.button`
  background-color: #c00;
  color: white;
  padding: 10px 16px;
  border-radius: 2px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  font-weight: bolder;
`;
const ViewsAndDateWrapper = styled.div`
  margin-right: auto;
  gap: 20px;
  color: ${({ theme }) => theme.textLight};
  font-size: 14px;
  font-weight: 500;
`;
const Logo = styled.img`
  border-radius: 50%;
  width: 50px;
  aspect-ratio: 1/1;
  cursor: pointer;
`;
const ChannelName = styled.div`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;
const Subscribers = styled.div`
  color: ${({ theme }) => theme.textLight};
  font-size: 14px;
`;
const Hr = styled.hr`
  border: none;
  height: 1px;
  background-color: ${({ theme }) => theme.hr};
`;
const Description = styled.h2`
  margin: 16px 50px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 400;
`;
const AddComment = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.bg};
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.bgLight};
  outline: none;
  color: ${({ theme }) => theme.text};
  margin: 20px 10px;
  font-size: 16px;
  &:focus {
    border-bottom-color: ${({ theme }) => theme.text};
  }
`;
function Video() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <Container>
      <MainContentWrapper>
        <VideoWrapper>
          <iframe
            className="ifr"
            width="356"
            height="600"
            src="https://www.youtube.com/embed/vJQMhj6WYZA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <VideoTitle>
          Barbadiyaan Video Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Placeat hic harum nobis nisi distinctio alias eligendi corporis
          ab mollitia accusamus?
        </VideoTitle>
        <DataAndActionsWrapper>
          <ViewsAndDateWrapper>
            <span>2,019,402,909,403 Views </span>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <span>23 Aug 2022</span>
          </ViewsAndDateWrapper>
          <Action>
            <ThumbUpOutlinedIcon />
            Like
          </Action>
          <Action>
            <ThumbDownOutlinedIcon />
            DisLike
          </Action>
          <Action>
            <ReplyOutlinedIcon />
            Share
          </Action>
          <Action>
            <FileDownloadOutlinedIcon />
            Download
          </Action>
          <Action>
            <PlaylistAddOutlinedIcon />
            Save
          </Action>
        </DataAndActionsWrapper>
        <Hr />
        <ChannelWrapper>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Logo src="https://yt3.ggpht.com/l8CPpluol0brprHG9dZMaD7AJ2XrngeNs_oy85XUqdkLi5E3PhCu7VmP_HsRM8yUk-suL-7ImQ=s88-c-k-c0x00ffffff-no-rj" />
            <div>
              <ChannelName>T-Series</ChannelName>
              <Subscribers>224M subscribers</Subscribers>
            </div>
          </div>
          <Subscribe>SUBSCRIBE</Subscribe>
        </ChannelWrapper>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, harum
          voluptate porro earum obcaecati, nam quos officia dignissimos
          architecto magnam vitae eos! Dolorem, suscipit eius provident
          quibusdam repudiandae quisquam cumque.
        </Description>
        <Hr />
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Logo
            style={{
              width: "40px",
            }}
            src="https://yt3.ggpht.com/l8CPpluol0brprHG9dZMaD7AJ2XrngeNs_oy85XUqdkLi5E3PhCu7VmP_HsRM8yUk-suL-7ImQ=s88-c-k-c0x00ffffff-no-rj"
          />
          <AddComment />
        </div>
        <Comment />
        <Comment />
        <Comment />
      </MainContentWrapper>
      <SuggestionsWrapper>
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
      </SuggestionsWrapper>
    </Container>
  );
}

export default Video;
