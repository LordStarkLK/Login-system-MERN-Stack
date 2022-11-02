import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./style/form-pages.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
