import React from "react";
import { Link } from "react-router-dom"


const Menu = ({loggedUser}) => {
    
    return (
        <nav className="navbar">
            <Link to="/">
                <img className="logo" src={require("../static/images/logo.png")} />
            </Link>           
            <ul className="nav-links">
                <li className='nav-item'><Link to="/admin"> Admin </Link></li>
                <li className='nav-item'>
                {loggedUser? <p>Welcome, {loggedUser.firstName}</p> : <p>Login</p>}
                </li>
                <li className="nav-item">
                    <Link to="/account">
                        <img className="icon" src={require("../static/images/person.png")}/>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;