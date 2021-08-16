import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from "./components/header";
import Global from "./components/Global";
import Watch from "./components/Watch";
import NotFound from "./components/NotFound";
function App() {
  return (
    <div>
      <Global />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
          </Route>
          <Route path="/watch/:id">
            <Watch />
          </Route>
          <Route >
           <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
