import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { Contact } from './components/contact';
import { About } from './components/about';
import { NotFound } from './components/notfound';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import { Navbar } from 'react-bootstrap'


function App() {
    return (
    <>
        <Navbar bg="dark" variant='dark'>
            <Navbar.Brand>SmashRadio!</Navbar.Brand>
            <ul className='d-flex align-items-start'>
                <li className='p-4'><Link to="/">Home</Link></li>
                <li className='p-4'><Link to="/about">About</Link></li>
                <li className='p-4'><Link to="contact">Contact</Link></li>
            </ul>
        </Navbar>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> 

        </Routes>
    </>
    )
}


export default App;
