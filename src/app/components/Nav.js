import React from 'react';
import Link from 'next/link'

const Nav = (props) => {
    return (
        <nav>
            <div className="logo">
                <h1>KLEIN Construction</h1>
                <div className="logo-types">
                    <p>Design-Build</p>
                    <p>HVAC</p>j
                    <p>Cabinetry</p>
                </div>
            </div>
            <div className="nav-links">
                <div className="navigation">
                    <Link href="/design">BUILD WITH US</Link>
                    <Link href="/hvac">HVAC</Link>
                    <Link href="/cabinets">CABINETS</Link>
                </div>
                <Link href="/contact">CONTACT US</Link>
            </div>
        </nav>
    )
};

export default Nav;