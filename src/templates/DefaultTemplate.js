import React from "react";

import { Route } from "react-router-dom";

import SimpleHeader from "../molecules/SimpleHeader/SimpleHeader";

import PersonalTheme from "../theme/PersonalTheme";


const DefaultTemplate = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <PersonalTheme>
            <SimpleHeader />
            <Component {...props} />
          </PersonalTheme>
        );
      }}
    />
  );
};

export default DefaultTemplate;
