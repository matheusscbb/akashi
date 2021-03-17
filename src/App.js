import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import './language/i18n';

import { CircularProgress } from "@material-ui/core";

import DefaultTemplate from "./templates/DefaultTemplate";
import WhithoutHeaderTemplate from "./templates/WhithoutHeaderTemplate";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

const Loader = () => (
  <CircularProgress
    style={{ marginLeft: 6 }}
    thickness={6}
    size={16}
    variant="indeterminate"
    color="secondary"
  />
);

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Switch>
            <DefaultTemplate exact path="/" component={HomePage} />

            <WhithoutHeaderTemplate exact path="/login" component={LoginPage} />

            <DefaultTemplate component={NotFoundPage} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
