import React from 'react';
import Link from 'next/link'

const Nav = (props) => {
    return (
        <nav className="nav">
            <div className="logo">
                <h1>KLEIN Construction</h1>
                <div className="logo-types">
                    <p>Design-Build</p>
                    <p>HVAC</p>
                    <p>Cabinetry</p>
                </div>
            </div>
            <div className="nav-links">
                <div className="navigation">
                    <Link className="link" href="/design">BUILD WITH US</Link>
                    <Link className="link" href="/hvac">HVAC</Link>
                    <Link className="link" href="/cabinets">CABINETS</Link>
                </div>
                <Link href="/contact">CONTACT US</Link>
            </div>
        </nav>
    )
};

export default Nav;