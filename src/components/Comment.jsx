import { ThumbDownOutlined } from "@mui/icons-material";
import ThumbUpOutlined from "@mui/icons-material/ThumbUpOutlined";
import { useTheme } from "@mui/material/styles";
import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
const Logo = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;
const Container = styled.div`
  display: flex;
  margin: 20px 0px;
`;

function Comment() {
  const theme = useSelector((state) => state.theme.value);
  console.log(theme.text);
  return (
    <Container>
      <Logo src="https://yt3.ggpht.com/ytc/AMLnZu8KegiKfJh11H0-rSo2z3haTdh4S7Ew3qqrImsP=s68-c-k-c0x00ffffff-no-rj" />
      <div
        style={{
          color: theme.text,
          fontSize: "14px",
          marginLeft: "10px",
        }}
      >
        <div>
          <span
            style={{
              color: theme.textDark,
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            Elon Musk
          </span>{" "}
          &nbsp; &nbsp;
          <span style={{ color: theme.textLight, fontWeight: "400" }}>
            2 months ago
          </span>
        </div>
        <div style={{ color: theme.text }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sint
          maxime quibusdam excepturi itaque quidem iure ipsum. Rerum, inventore
          officia!
        </div>
        <div
          style={{
            marginTop: "5px",
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <ThumbUpOutlined
            sx={{
              cursor: "pointer",
              width: "25px",
              padding: "5px",
              borderRadius: "3px",
              "&:hover": {
                background: theme.bgLight,
              },
            }}
          />
          <ThumbDownOutlined
            sx={{
              cursor: "pointer",
              width: "25px",
              padding: "5px",
              borderRadius: "3px",
              "&:hover": {
                background: theme.bgLight,
              },
            }}
          />
          <span
            style={{
              color: theme.textLight,
              cursor: "pointer",
              padding: "5px",
              borderRadius: "3px",
            }}
          >
            REPLY
          </span>
        </div>
      </div>
    </Container>
  );
}

export default Comment;
