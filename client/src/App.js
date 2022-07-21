import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';
import styles from './App.css';


const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='*' element={<Welcome />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </>
    );
}

export default App;