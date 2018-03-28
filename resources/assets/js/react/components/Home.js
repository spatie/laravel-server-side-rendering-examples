import React from 'react';
import uniq from 'lodash/uniq';
import { Link } from 'react-router-dom';

const Home = ({ packages }) => {
    const types = uniq(packages.map(p => p.type)).sort();

    const listTypes = types.map((type, index) => (
        <Link
            to={`/react/packages/${type}`}
            key={index}
            className="bg-blue-light font-bold mr-2 mb-2 sm:mr-4 sm:mb-0 px-4 py-2 no-underline rounded-sm text-white uppercase text-sm sm:text-base"
        >
            {type}
        </Link>
    ));

    return (
        <div>
            <h1>SSR with Laravel & React </h1>
            <section className="text-xl mb-12">
                <p className="mb-8">
                    This is a quick demo app for server side rendering React with Laravel. Below is
                    a list of our open source packages, which our client-side app has divided by
                    type.
                </p>
                <p>
                    We&apos;re using react-router for this page so each package type has its own
                    permalink, and will be prerendered on the server if visited directly.
                </p>
            </section>
            <nav className="flex flex-wrap">{listTypes}</nav>
        </div>
    );
};

export default Home;
