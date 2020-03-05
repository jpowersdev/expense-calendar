import React from 'react';
import { Link } from 'react-router-dom';

import { FaCalendar, FaDollarSign, FaFunnelDollar } from 'react-icons/fa';

import { StyledSidebar } from './styles';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <h1>
        <Link to='/'>Expense Pi</Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>
            <FaCalendar /> Month View
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/income'>
            <FaDollarSign /> Add Income
          </Link>
        </li>
        <li>
          <Link to='/expense'>
            <FaFunnelDollar /> Add Expense
          </Link>
        </li>
      </ul>
      <div className='bottom'>
        <small>
          The name of this app is directly taken from the random url that Zeit's
          Now assigned the project.
        </small>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
