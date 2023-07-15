import styled from "styled-components";

export const TicketContainer = styled.div`
  background-color: #f7f8fc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Ticket = styled.div`
  padding: 32px;
  border: 1px solid rgb(223, 224, 235);
  border-radius: 7px;
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;

  > div {
    > button {
      align-self: flex-start;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 80vw;

    a {
      text-decoration: none;
    }
  }

  > div:nth-child(2) {
    width: 1px;
    background-color: rgb(223, 224, 235);
  }

  button {
    margin-bottom: 24px;
  }

  svg {
    height: 100%;
  }

  h1 {
    text-align: center;
    margin-bottom: 12px;
  }
`;
