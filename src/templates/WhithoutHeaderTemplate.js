import React from "react";

import { Route } from "react-router-dom";

import ThemeSelector from "../theme/ThemeSelector";

const WhithoutHeaderTemplate = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <ThemeSelector>
            <div style={{height: '100vh'}}>
              <Component {...props} />
            </div>
          </ThemeSelector>
        );
      }}
    />
  );
};

export default WhithoutHeaderTemplate;
