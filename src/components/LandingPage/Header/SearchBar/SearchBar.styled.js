import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;

  > svg {
    color: #0f4392;
    margin 8px;
    cursor: pointer;
  }

  > input {
    width: 300px;
    border: 1px solid;
    border-radius: 4px;
    font-size: 16px;
    padding: 4px 12px;
    font-family: Mulish;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #0f4392;
    }
  }
`;
