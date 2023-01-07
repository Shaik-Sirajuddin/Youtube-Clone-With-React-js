import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  margin: 4px;
  color: ${({ theme }) => theme.text};
`;
const Thumbnail = styled.img`
  aspect-ratio: 16/9;
  width: 10vw;
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
  margin-top: 2px;
`;
const Text = styled.div`
  font-size: small;
  color: ${({ theme }) => theme.textLight};
`;
const ViewsWrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: flex-start;
`;
const VideoLength = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 3px;
`;
const DetailsWrap = styled.div`
  padding-left: 5px;
`;
class SuggestionCard extends Component {
  render() {
    return (
      <Link
        to="/video/tst"
        style={{
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        <Container>
          <Thumbnail src="https://i.ytimg.com/vi/cH4E_t3m3xM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCezXvWNTSEHR5ZVqVIdNbZ6qSSA" />
          <DetailsWrap>
            <TitleWrap>
              <Title>
                Barbadiya Official Video Song | Padala Prasad : Hero{" "}
              </Title>
            </TitleWrap>
            <div
              style={{
                marginTop: "2px",
              }}
            >
              <Text>Mr.Beast</Text>
              <ViewsWrapper>
                <Text>21M views</Text>
                <Text>2 months ago</Text>
              </ViewsWrapper>
            </div>
          </DetailsWrap>
        </Container>
      </Link>
    );
  }
}

export default SuggestionCard;
