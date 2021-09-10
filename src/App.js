import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"
import { Switch } from "react-router"


function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/home" render={(routerprops) => <Home/>}/>
            <Route path="/tracks" />
            <Route path="tracks/new" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
