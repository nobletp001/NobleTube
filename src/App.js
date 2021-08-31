import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Global from "./components/Global";
const Header = React.lazy(() => import("./components/header"));
const Watch = React.lazy(() => import("./components/Watch"));
const NotFound = React.lazy(() => import("./components/NotFound"));
const Loader =()=>{
  return <div> <img src="loading.gif" class="img-fluid" alt="loading"></img></div>
}

function App() {
  return (
    <div>
      <Global />
      <Router>
        <Suspense fallback={<Loader/>}>
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
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
