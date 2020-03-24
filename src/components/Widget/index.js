import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import {
  BoxContainer,
  Box,
  WidgetHeaderSection,
  WidgetFooterContainer
} from "./WidgetStyle";
import { Button } from "./essentials";
import { StaticQuery } from "gatsby";

const WidgetFooter = function({ Benefit }) {
  return (
    <WidgetFooterContainer className="widget-footer columns column">
      <div className="footer__group">
        {Benefit.map((value, index) => {
          return (
            <div key={index} className="column">
              <i className="fas fa-check">TICK</i>
              <p>{value}</p>
            </div>
          );
        })}
      </div>
    </WidgetFooterContainer>
  );
};

const WidgetContent = function({ step }) {
  console.log(step);
  return (
    step.Buttons &&
    step.Buttons.map((value, index) => {
      return <Button key={index} Icon={value.icon} text={value.text}></Button>;
    })
  );
};

const WidgetHeader = function() {
  return (
    <WidgetHeaderSection className="widget-header column ">
      <h1>Was ist Ihre Immobilie wert?</h1>
      <h2>Ihre Immobilie in DORNBUSCH kostenlos bewerten</h2>
      <h5>Welche Immobilie möchten sie bewerten</h5>
    </WidgetHeaderSection>
  );
};
export const Widget = function({ config }) {
  return (
    <BoxContainer className="box-container">
      <div className="maxWidth">
        {config.Steps.map((value, index) => {
          return (
            <Box key={index} className="box columns">
              <div className="columns progress">
                <progress
                  className="progress column"
                  value="0"
                  max="100"
                ></progress>
              </div>
              <div className="columns column is-centered ">
                <WidgetHeader></WidgetHeader>
              </div>
              <div className="widget-content columns column is-vcentered ">
                <WidgetContent
                  step={value.values}
                  className="column"
                ></WidgetContent>
              </div>
              <WidgetFooter
                Benefit={config.Footer.Content.Benefit}
              ></WidgetFooter>
            </Box>
          );
        })}
      </div>
    </BoxContainer>
  );
};

Widget.protoTypes = {
  config: PropTypes.object
};
