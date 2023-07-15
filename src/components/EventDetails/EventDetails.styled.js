import styled from "styled-components";

export const EventDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
  justify-content: flex-start !important;

  > h2 {
    margin-bottom: 16px;
  }
`;

export const ListaIngressos = styled.div`
  margin-top: 48px;
  width: 100%;

  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;
