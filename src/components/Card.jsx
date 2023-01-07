import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  width: 20vw;
  cursor: pointer;
  aspect-ratio: 16/9;
  background-color: ${({ theme }) => theme.bgDark};
  margin: 4px;
  color: ${({ theme }) => theme.text};
`;
const Thumbnail = styled.img`
  aspect-ratio: 16/9;
  width: 100%;
  object-position: center;
  background-position: center center;
`;
const Title = styled.h1`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 45px;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const TitleWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;
const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
`;
const Text = styled.div`
  font-size: small;
  color: ${({ theme }) => theme.textLight};
`;
const ViewsWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  margin-bottom: 20px;
`;
const VideoLength = styled.div`
  width: fit-content;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  position: relative;
  right: 10px;
  bottom: 38px;
  float: right;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 3px;
`;
class Card extends Component {
  render() {
    return (
      <Link
        to="/video/test"
        style={{
          textDecoration: "none",
        }}
      >
        <Container>
          <Thumbnail src="https://pps.whatsapp.net/v/t61.24694-24/301446773_1342349312972116_2959173932904808641_n.jpg?ccb=11-4&oh=01_AVz53q4MCUarTPCLJcothgrFFf3BpozINa6ytyCc2w_PZg&oe=63288B33" />
          <VideoLength>11:20</VideoLength>
          <TitleWrap>
            <ChannelLogo src="https://yt3.ggpht.com/0M8yO3KOcRNrDwDc55z4v9tn2RhSRv2MsvNQSvf0GNDuxS8aVqu6TF0ti7xLSjRuUbuz-iAeFA=s68-c-k-c0x00ffffff-no-rj" />
            <Title>Barbadiya Official Video Song | Padala Prasad : Hero </Title>
          </TitleWrap>
          <div
            style={{
              marginLeft: "46px",
              marginTop: "10px",
            }}
          >
            <Text>Mr.Beast</Text>
            <ViewsWrapper>
              <Text>21M views</Text>
              <Text>2 months ago</Text>
            </ViewsWrapper>
          </div>
        </Container>
      </Link>
    );
  }
}

export default Card;
