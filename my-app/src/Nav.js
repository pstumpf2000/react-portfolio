import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = (props) => {
    return (
    <ul className= 'nav'>
    <li>
      <NavLink exact activeClassName='active' to='/'>About
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName='active' to='/projects'>Projects
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName='active' to='/contact'>Contact
      </NavLink>
    </li>
    </ul>
  )
};
