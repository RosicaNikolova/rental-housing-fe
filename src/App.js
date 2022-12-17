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
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import useAuth from './hooks/useAuth';
import Logout from './pages/Logout';
import ChatRoom from './pages/ChatRoom';

function App() {

  const {auth} = useAuth();
  console.log("app");
  return (
    <div className="App">
      
    <Container>
      <Router>
{/* 
        {auth?.accessToken ? <Navigation /> : <NoauthorizationNavigation />}
        {console.log("auth:" + auth.accessToken)} */}

        <Navigation/>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/properties" element={ <OverviewPropertiesPage/>} />
            <Route path="/users" element={<UsersPage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />

            <Route element={<RequireAuth />}>
              <Route path="/createProperty" element={<CreatePropertyPage/>} />
            </Route>
            <Route path="/Property/:id" element={<PropertyPage/>} />
            <Route path="/RequestsPage" element={<RequestsPage/>} />
            <Route path="/Logout" element={<Logout/>} />
            <Route path="/Chatroom" element={<ChatRoom/>} />
          </Route>
        </Routes>
      </Router>
    </Container>
    </div>
  );
}

export default App;
