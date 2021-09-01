import React, { Suspense  } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Global from "./components/Global";
import "../src/App.css"
const Header = React.lazy(() => import("./components/header"));
const Watch = React.lazy(() => import("./components/Watch"));
const NotFound = React.lazy(() => import("./components/NotFound"));
// const Loader =()=>{
//   return <div> <img src="loading.gif" class="img-fluid" alt="loading"></img></div>
// }



const Loading =()=>{
   <div>
     <div className="Body">
       <img src="img.gif" class="img-fluid h-100 w-100" alt="loading"></img>
     </div>
   </div>;
}
function App() {
 

  return (
    <div  >
        <Suspense fallback={<Loading/>}>

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
        </Suspense>

    </div>
  );
}

export default App;
