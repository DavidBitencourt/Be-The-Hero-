import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Logon from "./Pages/Logon";
import NewIncident from "./Pages/NewIncident";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Logon} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/incidents/new" component={NewIncident} exact />
      </Switch>
    </BrowserRouter>
  );
}
