import styled from "styled-components";

export const PaymentStageContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;

  input {
    width: 100%;
  }

  > div {
    > div {
      background-color: rgb(223, 224, 235);
      height: 1px;
      width: 100%;
      margin: 8px 0 16px 0;
    }
  }
`;

export const AdvanceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    color: rgb(15, 67, 146);
    font-weight: 700;
    text-decoration: underline;
  }
`;
