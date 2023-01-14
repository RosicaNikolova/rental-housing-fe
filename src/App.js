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
import Layout from './components/Layout';
import Logout from './pages/Logout';
import ChatRoom from './pages/ChatRoom';
import MyInquiriesPage from './pages/MyRequestsPage/MyInquiriesPage';
import Forbidden from './pages/Forbidden/Forbidden';

function App() {

  console.log("app class");
  return (
    <div className="App">
      
    <Container>
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/properties" element={ <OverviewPropertiesPage/>} />
            <Route path="/users" element={<UsersPage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/Logout" element={<Logout/>} />
            <Route path="/Property/:id" element={<PropertyPage/>} />
            <Route path="/RequestsPage" element={<RequestsPage/>} />
            <Route path="/forbidden" element={<Forbidden/>}/>
            <Route path="/RequestsPage" element={<RequestsPage/>} />
            <Route path="/createProperty" element={<CreatePropertyPage/>} />
            <Route path="/MyInquiries" element={<MyInquiriesPage/>} /> 
            <Route path="/Chatroom" element={<ChatRoom/>} />          
          </Route>
        </Routes>
      </Router>
    </Container>
    </div>
  );
}

export default App;
