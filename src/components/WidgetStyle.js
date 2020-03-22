import styled from "styled-components";

export const Box = styled.div`
  && {
    margin: auto;
    max-wifth: 768px;
  }

  @media (min-width: 768px) {
    min-height: 470px;
    text-align: center;

    & .columns:not(.progress) {
      height: 33.3333%;
    }
  }
`;
