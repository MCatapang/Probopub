import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = (props) => {
    const navigate = useNavigate()
    
    return (
        <div id="navbar">
            <h1 id="navbarHeader" onClick={() => navigate('/')}>
                <img src={logo} alt="logo"/>
                Probopub
            </h1>
            <ul id="navbarLinks">
                <li onClick={() => navigate('/login')}>
                    <h2>Login</h2>
                </li>
                <li onClick={() => navigate('/register')}>
                    <h2>Register</h2>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;