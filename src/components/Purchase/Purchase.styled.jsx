import styled from "styled-components";

export const PurchaseContainer = styled.div`
  background-color: rgb(247, 248, 252);
  height: 100vh;
  width: 100vw;

  > button:first-child {
    margin: 16px;
    position: absolute;
  }

  > div {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;

    h2 {
      text-align: center;
    }

    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    > div:nth-child(1) {
      align-items: center;
    }

    > div:nth-child(2) {
      background-color: #fff;
      padding: 32px;
      border: 1px solid rgb(223, 224, 235);
      border-radius: 8px;

      > p {
        margin: 16px 0 16px 0;
        font-size: 24px;
      }
    }
  }
`;
