//import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import UsersPage from './pages/UsersPage';
import Navigation from './components/Navigation';
import { Container } from '@mui/system';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePropertyPage from './pages/CreatePropertyPage';
import PropertyPage from './pages/PropertyPage/PropertyPage';
import RequestsPage from './pages/RequestsPage/RequestsPage';
import OverviewPropertiesPage from './pages/OverviewPropertiesPage/OverviewPropertiesPage';


function App() {
  return (
    <div className="App">
      
    <Container>
      <Router>

        <Navigation />
        <Routes>
          <Route path="/properties" element={ <OverviewPropertiesPage/>} />
          <Route path="/users" element={<UsersPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/createProperty" element={<CreatePropertyPage/>} />
          <Route path="/Property/:id" element={<PropertyPage/>} />
          <Route path="/RequestsPage" element={<RequestsPage/>} />

        </Routes>
      </Router>
      </Container>
    </div>
  );
}

export default App;
