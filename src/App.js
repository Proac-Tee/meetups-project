import React from "react";
import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./components/pages/AllMeetups";
import NewMeetupPage from "./components/pages/NewMeetup";
import FavouritePage from "./components/pages/Favourite";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favourite">
          <FavouritePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
