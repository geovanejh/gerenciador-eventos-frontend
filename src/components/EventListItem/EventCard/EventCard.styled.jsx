import styled from "styled-components";

export const CardPageContainer = styled.div`
  padding: 0 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const EventCardContainer = styled.div`
  border: 1px solid rgb(223, 224, 235);
  background-color: rgb(247, 248, 252);
  border-radius: 7px;
  margin: 0 32px 32px 0;
  cursor: pointer;
  width: 100%;

  &:hover {
    scale: 1.05;
    transition: 0.3s;
  }

  > div {
    padding: 12px;

    > h2 {
      font-size: 22px;
    }

    > h3 {
      font-size: 16px;
    }

    > h4 {
      font-size: 12px;
    }
  }
`;
