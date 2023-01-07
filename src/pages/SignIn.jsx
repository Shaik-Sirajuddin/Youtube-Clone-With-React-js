import React, { Component } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Container = styled.div`
  background-color: ${({ theme }) => theme.bgDark};
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 30px;
  border-radius: 4px;
  gap: 15px;
  background-color: ${({ theme }) => theme.bg};
`;
const TextField = styled.input`
  width: 300px;
  border-radius: 4px;
  padding: 7px 10px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.hr};
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgLight};
  outline: none;
  &:focus {
    border-color: 1px solid ${({ theme }) => theme.text};
  }
`;
const Button = styled.button`
  background-color: ${({ theme }) => theme.hr};
  border-radius: 4px;
  color: ${({ theme }) => theme.textLight};
  padding: 7px 10px;
  cursor: pointer;
  font-size: medium;
  font-weight: bold;
  border: none;
`;
function SignIn() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <Container>
      <Box>
        <h2
          style={{
            color: `${theme.textDark}`,
          }}
        >
          Sign In
        </h2>
        <div
          style={{
            color: `${theme.text}`,
          }}
        >
          {" "}
          to continue to yuutube{" "}
        </div>
        <TextField placeholder="username" type="text"></TextField>
        <TextField placeholder="password" type="password"></TextField>
        <Button>Sign In</Button>
        <div
          style={{
            color: `${theme.text}`,
          }}
        >
          Or
        </div>
        <TextField placeholder="username" type="text"></TextField>
        <TextField placeholder="email" type="email"></TextField>
        <TextField placeholder="password" type="password"></TextField>
        <Button>Sign Up </Button>
      </Box>
    </Container>
  );
}
export default SignIn;
