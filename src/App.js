import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet} from "react-router-dom";
import Menu from './menu/Menu';
import Home from './home/Home';
import './App.css';
import Admin from './admin/Admin';
import Property from './properties/Property';
import Profile from './login/Profile';
import PropertyGallery from './gallery/PropertyGallery';
import { useAuth0 } from '@auth0/auth0-react';
import GuestService from "./services/GuestService"

const PrivateRoute = () => {
  const auth = null;
  return auth ? <Outlet /> : <Navigate to="/" />;
}

function App() {
  const { user, isLoading, isAuthenticated } = useAuth0();
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      GuestService.getGuestByEmail(user.email)
      .then(res => setLoggedUser(res))
    }
  }, [isAuthenticated])

  return (
    <div className="App">
      <Router>
        <Menu loggedUser={loggedUser} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/property/:id' 
            element={<Property loggedUser={loggedUser} />} />
          <Route path='/account' 
            element={<Profile 
              setLoggedUser={setLoggedUser} 
              loggedUser={loggedUser} />} />
          <Route path='/property/gallery/:id' 
            element={<PropertyGallery />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App;