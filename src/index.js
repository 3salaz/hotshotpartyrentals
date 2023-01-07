import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'alpinejs';
import App   from './App';
import './App.css';

// Firebase configuration


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <App/>
    </Router>
)
