import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    const navigate = useNavigate()

    return (
        <div className='m-0 p-0 flex flex-row justify-between bg-custom-bg-non-body'>
            <h1 className='text-3xl'>Probopub</h1>
            <ul>
                <li onClick={() => navigate('/login')}>Login</li>
                <li onClick={() => navigate('/register')}>Register</li>
            </ul>
        </div>
    )
}

export default Navbar;