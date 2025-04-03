import React, { lazy, Suspense } from "react";

import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";

import { Home } from "../pages/Home";

const PageNotFound = lazy(() => import("../pages/PageNotFound"));

export const App = () => {
    logCredits();

    return (
      <ThemeProvider>
        <CssBaseline />
        <Router>
          <HelmetMeta />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact component={Home} />
              {/* <Route path="/resume" component={Resume} /> */}
              <Route path="*" component={PageNotFound} />
            </Switch>
          </Suspense>
        </Router>
      </ThemeProvider>
    );
};
