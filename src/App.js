import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ChartDropdownTutorial from './pages/chart-apex-custom.js';

function App() {
  return (
    <Router>
          <Switch>
            <Route exact path="/Chart-Dropdown-Tutorial">
              <ChartDropdownTutorial/>
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
