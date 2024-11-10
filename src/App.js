jsx
// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GridPage from "./pages/GridPage";
import MusicPage from "./pages/MusicPage";
import SidebarPage from "./pages/SidebarPage";
import CircularSidebarPage from "./pages/CircularSidebarPage";
import MainContentPage from "./pages/MainContentPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/grid" component={GridPage} />
        <Route path="/music" component={MusicPage} />
        <Route path="/sidebar" component={SidebarPage} />
        <Route path="/circular-sidebar" component={CircularSidebarPage} />
        <Route path="/main-content" component={MainContentPage} />
      </Switch>
    </Router>
  );
};

export default App;