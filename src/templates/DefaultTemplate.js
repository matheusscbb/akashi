import React from "react";

import { Route } from "react-router-dom";

import SimpleHeader from "../molecules/SimpleHeader/SimpleHeader";
import ThemeSelector from "../theme/ThemeSelector";


const DefaultTemplate = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <ThemeSelector>
            <div style={{height: 'calc(100vh - 60px)'}}>
              <SimpleHeader />
              <Component {...props} />
            </div>
          </ThemeSelector>
        );
      }}
    />
  );
};

export default DefaultTemplate;
