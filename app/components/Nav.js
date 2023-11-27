'use client'
import React, { useState } from 'react';
import Link from 'next/link'

const Nav = (props) => {

    const [page, setPage] = useState("Construction");

    return (
        <nav className="nav">
            <div className="logo">
                <h1><span className="orange-text">KLEIN</span> {page}</h1>
            </div>
            <div className="nav-links">
                <div className="navigation">
                    <Link onClick={() => setPage("Construction")} className="link" href="/design">CONSTRUCTION</Link>
                    <Link onClick={() => setPage("Heating & Air")} className="link" href="/hvac">HEATING & AIR</Link>
                    <Link onClick={() => setPage("Cabinets")} className="link" href="/cabinets">CABINETS</Link>
                </div>
            </div>
        </nav>
    )
};

export default Nav;