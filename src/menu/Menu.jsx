import React from "react";
import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <nav className="navbar">
            <img className="logo" src={require("../static/images/logo.png")} />
            <ul className="nav-links">
                <li className="nav-item"><Link to="/"> Home </Link></li>
                <li className='nav-item'><Link to="/admin"> Admin </Link></li>
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