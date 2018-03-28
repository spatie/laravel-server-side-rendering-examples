import React from 'react';
import Home from './components/Home';
import Packages from './components/Packages';
import { withRouter, Route, Link } from 'react-router-dom';

const App = ({ packages, location }) => (
    <div className="max-w-md mt-8 sm:mt-16 mx-auto px-8">
        <Link
            to="/react/"
            className={`text-xs text-grey-light inline-block mb-2 ${
                location.pathname === '/react/' ? 'invisible' : ''
            }`}
        >
            ← <span className="underline">Back</span>
        </Link>
        <Route exact path="/react" render={props => <Home packages={packages} {...props} />} />
        <Route
            path="/react/packages/:type"
            render={props => <Packages packages={packages} {...props} />}
        />
    </div>
);

export default withRouter(App);
