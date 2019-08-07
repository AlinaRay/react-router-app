import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <h3 className="logo">Logo</h3>
            <ul className="nav-links">
                <NavLink to="/about">
                    <li>About</li>
                </NavLink>
                <NavLink to="/shop">
                    <li>Shop</li>
                </NavLink>
            </ul>
        </nav>
    );
}

export default Nav;