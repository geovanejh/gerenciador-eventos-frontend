import styled from "styled-components";

export const LoginPageContainer = styled.div`
  > button:first-child {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0f4392;
`;

export const LoginForm = styled.form`
  background-color: #fff;
  height: 582px;
  width: 380px;
  border-radius: 8px;
  padding: 40px 32px;
`;
