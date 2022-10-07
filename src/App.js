import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import UsersPage from './pages/UsersPage';
import PropertiesPage from './pages/PropertiesPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/user" element={<UsersPage/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

/*<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */

export default App;
