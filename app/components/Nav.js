'use client'
import React, { useState } from 'react';
import Link from 'next/link'

const Nav = (props) => {

    const [page, setPage] = useState("Construction");
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

    return (
        <nav className="nav">
            <div className="logo">
                <h1><span className="orange-text">KLEIN</span> {page}</h1>
            </div>
            <div className="nav-links">
                 <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
                    <div className="hamburger-icon" onClick={toggleMenu}>
                        {/* You can use any hamburger icon you like here */}
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <div className="menu">
                    <Link href="/design" onClick={() => {setPage("Construction"); toggleMenu();}}>
                        CONSTRUCTION
                    </Link>
                    <Link href="/hvac" onClick={() => {setPage("Heating & Air"); toggleMenu();}}>
                        HEATING AND AIR
                    </Link>
                    <Link href="/cabinets" onClick={() => {setPage("Cabinets"); toggleMenu();}}>
                        CABINETS
                     </Link>
                     <Link href="/" onClick={() => {setPage("Construction"); toggleMenu();}}>
                        HOME
                     </Link>
                    </div>
                </div>
                <div className="navigation">
                    <Link onClick={() => setPage("Construction")} className="link" href="/design">CONSTRUCTION</Link>
                    <Link onClick={() => setPage("Heating & Air")} className="link" href="/hvac">HEATING & AIR</Link>
                    <Link onClick={() => setPage("Cabinets")} className="link" href="/cabinets">CABINETS</Link>
                    <Link onClick={() => setPage("Construction")} className="link" href="/">HOME</Link>
                </div>
            </div>
        </nav>
    )
};

export default Nav;