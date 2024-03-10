import logo from "./logo.svg";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Sample1 from "./Pages/sample1/Sample1";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sample1" component={Sample1} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
