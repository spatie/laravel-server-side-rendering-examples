import React from 'react';
import Home from './components/Home';
import About from './components/About';
import { Route, Link } from 'react-router-dom';

const App = () => (
    <div>
        <ul>
            <li>
                <Link to="/react">Home</Link>
            </li>
            <li>
                <Link to="/react/about">About</Link>
            </li>
        </ul>
        <Route exact path="/react" component={Home} />
        <Route path="/react/about" component={About} />
    </div>
);

export default App;
