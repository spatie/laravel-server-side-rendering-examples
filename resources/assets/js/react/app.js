import React from 'react';
import Home from './components/Home';
import Packages from './components/Packages';
import { Route } from 'react-router-dom';

const App = ({ packages }) => (
    <div className="max-w-md mt-8 sm:mt-16 mx-auto px-8">
        <Route exact path="/react" render={props => <Home packages={packages} {...props} />} />
        <Route
            path="/react/packages/:type"
            render={props => <Packages packages={packages} {...props} />}
        />
    </div>
);

export default App;
