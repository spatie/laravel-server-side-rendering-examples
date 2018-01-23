import App from './app';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const el = document.getElementById('app');

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    el
);
