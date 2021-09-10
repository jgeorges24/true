import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "React-router-dom"
import { Switch } from "react-router"
import Home from "./components/Home"


function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/home" render={(routerProps) => <Home {...routerProps} />}/>
            <Route path="/tracks" />
            <Route path="tracks/new" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
