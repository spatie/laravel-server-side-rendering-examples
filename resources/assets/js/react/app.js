import React from 'react';
import Home from './components/Home';
import Packages from './components/Packages';
import { Route, Link } from 'react-router-dom';

const App = () => (
    <div className="max-w-md mt-8 sm:mt-16 mx-auto px-8">
        <Route exact path="/react" component={Home} />
        <Route path="/react/packages/:type" component={Packages} />
    </div>
);

export default App;
