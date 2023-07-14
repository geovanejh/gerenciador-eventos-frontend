import styled from "styled-components";

export const CustomSection = styled.section`
  margin: 24px 0 24px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > div {
    width: 100%;
    display: flex;
    justify-content: center;

    > h1 {
      font-size: 56px;
      text-align: center;

      > span {
        color: rgb(15, 67, 146);
        font-weight: 800;
      }
    }
  }

  img {
    height: 450px;
    width: 450px;
  }
`;
