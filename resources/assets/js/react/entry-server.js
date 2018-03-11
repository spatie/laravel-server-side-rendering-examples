import App from './app';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import packagesApp from './reducers';

// Compile an initial state
const preloadedState = { packages: context.packages };

// Create a new Redux store instance
const store = createStore(packagesApp, preloadedState);

const html = ReactDOMServer.renderToString(
    <div id="app">
        <Provider store={store}>
            <StaticRouter location={context.url}>
                <App />
            </StaticRouter>
        </Provider>
    </div>
);

dispatch(html);
