import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet} from "react-router-dom";
import Menu from './menu/Menu';
import Home from './home/Home';
import './App.css';
import Admin from './admin/Admin';
import Property from './properties/Property';

const PrivateRoute = () => {
  const auth = null;
  return auth ? <Outlet /> : <Navigate to="/" />;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/property/:id' element={<Property />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;