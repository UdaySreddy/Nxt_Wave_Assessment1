import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Resources from "./components/Resources";
import Resources2 from "./components/Resources2";
import Header1 from "./components/Header1";

function App() {
  return (
    <BrowserRouter>
      <Header1 />
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/home" component={Resources} />
        <Route exact path="/additem" component={Resources2} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
