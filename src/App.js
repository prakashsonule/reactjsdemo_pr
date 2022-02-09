import logo from './logo.svg';
import './App.css';
import Home from './cmp/Home';
import Listing from './cmp/Listing';
import About from './cmp/About';
import Auth from './cmp/Auth';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Auth />
      <Router>
        
      </Router>
    </div>
  );
}

export default App;
