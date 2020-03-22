import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Box } from "./WidgetStyle";

export const Widget = function() {
  return (
    <Box className="box">
      <div className="columns progress">
        <progress className="progress column" value="0" max="100"></progress>
      </div>
      <div className="columns is-centered ">
        <header className="widget-header column ">
          <h1>Was ist Ihre Immobilie wert?</h1>
          <h2>Ihre Immobilie in DORNBUSCH kostenlos bewerten</h2>
          <h5>Welche Immobilie möchten sie bewerten</h5>
        </header>
      </div>
      <div className="widget-content columns is-vcentered ">
        <div className="column">
          <button className="button is-primary">1</button>
        </div>
        <div className="column">
          <button className="button is-primary">2</button>
        </div>
        <div className="column">
          <button className="button is-primary">3</button>
        </div>
        <div className="column">
          <button className="button is-primary">4</button>
        </div>
      </div>
      <div className="widget-footer columns column">
        <div className="column">
          <p>
            <i>TICK</i> Wir sammeln keine Daten auf unserer Website
          </p>
        </div>
        <div className="column">
          <p>
            <i>TICK</i> Ein Familienunternehmen mit Tradition
          </p>
        </div>
      </div>
    </Box>
  );
};
