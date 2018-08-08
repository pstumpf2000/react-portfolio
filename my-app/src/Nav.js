import React from 'react';
import { Tabs, Tab } from 'react-materialize';

// import { NavLink } from 'react-router-dom';

export const Nav = (props) => {
    return (
    <Tabs className='nav'>
      <Tab title="About">About</Tab>
      <Tab title="Projects" active>Projects</Tab>
      <Tab title="Contact">Contact</Tab>
  </Tabs>
  )
};
