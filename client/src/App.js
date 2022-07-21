import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Filler from './components/Filler';
import Test from './components/Test';
import styles from './App.css';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='*' element={<Filler />} />
                <Route path='/test' element={<Test />} />
            </Routes>
        </>
    );
}

export default App;