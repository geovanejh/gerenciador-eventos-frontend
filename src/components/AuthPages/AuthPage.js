import styled from "styled-components";

export const AuthPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #363740;
  height: 100vh;
  width: 100vw;

  > div > button:first-child {
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;
