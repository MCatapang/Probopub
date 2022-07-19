import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Filler from './components/Filler';
import Test from './components/Test';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='*' element={<Filler />} />
                <Route path='/test' element={<Test />} />
            </Routes>
        </>
    );
}

export default App;