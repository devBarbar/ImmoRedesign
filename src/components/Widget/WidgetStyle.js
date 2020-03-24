import styled from "styled-components";

export const BoxContainer = styled.div`
  && {
    margin: auto;
    max-width: 768px;

    .maxWidth {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    & .columns:not(.progress) {
      height: 33.3333%;
    }
  }
`;

export const Box = styled.div`
  && {
    font-size: 15px;
    color: #222;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    min-height: 530px;
    max-width: 900px;
    width: 100%;
  }

  @media (max-width: 767px) {
    && {
      min-height: 455px;
    }
  }

  && {
    background-color: #fafafa;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.14);
  }
`;

export const ButtonWrapper = styled.div`
  && {
    flex: 1 0;
    padding: 10px;
    display: flex;
    height: 185px;
  }

  @media (max-width: 767px) {
    flex-grow: 0;
    flex-basis: 50%;
    height: 145px;
    padding: 5px;
  }
`;

export const IconButton = styled.div`
  && {
    align-items: center;
    background-color: #fff;
    border: 4px solid #fff;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.16);
    cursor: pointer;
    display: flex;
    font-size: 16px;
    hyphens: manual;
    justify-content: center;
    outline: none;
    padding: 4px;
    width: 100%;
  }

  @media (max-width: 767px) {
    &&.icon-button--vertical {
      flex-direction: column;

      && .icon-button__icon-container {
        flex: 1 0 auto;
      }
    }
  }
  @media (min-width: 768px) {
    &&.icon-button {
      flex-direction: column;
    }
    &&:hover {
      border-color: #0f0756;
    }
  }
`;

export const IconButtonContainer = styled.div`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  && .icon-button__icon {
    display: block;
    height: 64px;

    max-width: 100%;
  }

  @media (min-width: 768px) {
    && .icon-button__icon {
      width: 100%;
      height: 100px;
    }
  }
`;

export const IconButtonText = styled.div`
  && {
    text-align: center;
    width: 100%;
  }

  @media (min-width: 768px) {
    && {
      margin-top: 16px;
    }
  }
`;

export const WidgetHeaderSection = styled.header`

&& h1 {
  font-size:24px;
  line-height:32px;
  margin: 0 40px 0;
  white-space: pre-line;
}

&& h2 {
  font-size:13px;
  margin-top: 7px;
}

&& h5 {
  color: #5b5b5b;
  font-size: 10px;
  font-weight:300;
  margin-top:6px;
}
@media (min-width: 375px) {
  && h2 {
    font-size:20px;
  }

  && h5 {
    font-size:15px;
  }
}
@media(max-width: 767px) {
  font-size:15px;
  line-height:normal:
  margin: 0;
}

`;

export const WidgetFooterContainer = styled.div`
  && {
    position: relative;
    padding: 0 40px 40px;
  }

  && .footer__group {
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin-right: 1%;
  }

  && .column {
    display: flex;
    text-align: left;
    font-size: 10px;
    color: #cfcfcfd;
    align-items: center;
  }

  && i {
    margin-right: 4px;
    width: 10px;
    max-width: 100%;
  }

  @media (min-width: 767px) {
    && .footer-group {
      margin-right: 5%;
    }

    && .column {
      font-size: 13px;
      height: 44px;
      white-space: pre;
    }

    && i {
      margin-right: 10px;
    }
  }

  @media (max-width: 767px) {
    && {
      display: none;
      padding: 0 20px;
    }

    && .footer__group {
      flex-direction: column;
    }
  }
`;
