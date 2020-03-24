import React from "react";

import {
  ButtonWrapper,
  IconButton,
  IconButtonContainer,
  IconButtonText
} from "./WidgetStyle";
export const Button = function({ Icon, text }) {
  return (
    <ButtonWrapper className="box__button">
      <IconButton className="icon-button icon-button--vertical">
        <IconButtonContainer className="icon-button__icon-container">
          <img src={Icon} className="icon-button__icon"></img>
        </IconButtonContainer>
        <IconButtonText className="icon-button__title">{text}</IconButtonText>
      </IconButton>
    </ButtonWrapper>
  );
};
