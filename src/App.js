import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Example from "./component/Example";
import MemberEntry from "./component/MemberEntry";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={MemberEntry} />
          <Route exact path="/Example" component={Example} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
