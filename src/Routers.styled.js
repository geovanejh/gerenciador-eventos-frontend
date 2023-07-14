import styled from "styled-components";

export const RouterContainer = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  margin-left: ${(props) => (props.pathname ? "255px" : 0)};
  width: 100%;
  background-color: rgb(247, 248, 252);
  height: 100%;
  min-height: 100vh;
`;
