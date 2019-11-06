import React from 'react';
import Home from "./home/Home";
import Login from "./login/Login";
import Detail from "./detail/Detail";
import Single from "./single/Single";
import NotFound from "./NotFound/NotFound";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/detail" component={Detail}/>
                <Route path="/login" component={Login}/>
                <Route path="/single/:id" component={Single}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
