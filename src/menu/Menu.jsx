import React from "react";
import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <div className="menu-div">
            <h1>CodeBNB</h1>
            <ul>
                <li className='nav-links'>
                    <Link to="/">Home</Link>
                </li>
                <li className='nav-links'>
                    <Link to="/admin">Admin</Link>
                </li>
                {/* <li className='nav-links'>
                    <Link to="/become-a-host">Become a host</Link>
                </li>
                <li className='nav-links'>
                    <Link to="/sign-up">Sign up</Link>
                </li>
                <li className='nav-links'>
                    <Link to="/log-in">Log in</Link>
                </li>
                <li className='nav-links'>
                    <Link to="/help">Help</Link>
                </li> */}
            </ul>
        </div>
    )
}

export default Menu;