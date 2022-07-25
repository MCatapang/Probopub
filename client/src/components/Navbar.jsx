import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    const navigate = useNavigate()

    return (
        <div id="navbar">
            <h1 id="navbarLogo">Probopub</h1>
            <ul id="navbarLinks">
                <li onClick={() => navigate('/login')}>Login</li>
                <li onClick={() => navigate('/register')}>Register</li>
            </ul>
        </div>
    )
}

export default Navbar;