import React, { Component } from "react";
import Menu from "./Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Formulaire from "./Formulaire";
import Accueil from "./Accueil";

class Sace extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/accueil" component={Accueil} />
          <Route path="/formulaire" component={Formulaire} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Sace;
