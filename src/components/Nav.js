import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => (
    <nav>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/sign-in" activeClassName="is-active">Sign In</NavLink>
        <NavLink to="/register" activeClassName="is-active">Register</NavLink>
    </nav>
);

export default Nav;