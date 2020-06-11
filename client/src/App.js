import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import FavoritesList from "./pages/FavoritesList";
import { StoreProvider } from "./utils/GlobalState";

function App() {
  const user = localStorage.getItem("user");

  return (
    <Router>
      {user ?
        <div>
          <Nav />
          <StoreProvider>
            <Switch>
              <Route exact path="/" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/favorites" component={FavoritesList} />
              <Route exact path="/posts/:id" component={Detail} />
              <Route component={NoMatch} />
            </Switch>
          </StoreProvider>
        </div>
        :
        <div>
          <Nav />
          <StoreProvider>
            <Switch>
              <Route exact path="/" component={Signup} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </StoreProvider>
        </div>
      }
    </Router>
  );
}

export default App;
