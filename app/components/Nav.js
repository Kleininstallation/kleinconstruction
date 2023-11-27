import React from 'react';
import Link from 'next/link'

const Nav = (props) => {
    return (
        <nav className="nav">
            <div className="logo">
                <h1><span className="orange-text">KLEIN</span> Construction</h1>
            </div>
            <div className="nav-links">
                <div className="navigation">
                    <Link className="link" href="/design">CONSTRUCTION</Link>
                    <Link className="link" href="/hvac">HEATING & AIR</Link>
                    <Link className="link" href="/cabinets">CABINETS</Link>
                </div>
            </div>
        </nav>
    )
};

export default Nav;