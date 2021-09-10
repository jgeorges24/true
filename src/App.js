import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "React-router-dom"
import { Switch } from "react-router"
import Home from "./components/Home"
import Videos from "./containers/Videos"
import VideoForm from "./components/VideoForm"
import NavBar from "./components/NavBar"


function App() {
  return (
    <div>
      <Router>
        <div>
        <NavBar />
          <Switch>
            <Route path="/home" render={(routerProps) => <Home {...routerProps} />}/>
            <Route path="/tracks" render={(routerProps) => <Videos {...routerProps} />}/>
            <Route path="tracks/new" render={(routerProps) => <VideoForm {...routerProps} />}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
