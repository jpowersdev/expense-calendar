import React from 'react';
import { Link } from 'react-router-dom';

import {
  FaCalendar,
  FaCalendarWeek,
  FaCalendarDay,
  FaDollarSign,
  FaFunnelDollar
} from 'react-icons/fa';

import styled from 'styled-components';

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
        {/* <li>
          <Link to='/week'>
            <FaCalendarWeek /> Week View
          </Link>
        </li>
        <li>
          <Link to='/agenda'>
            <FaCalendarDay /> Agenda View
          </Link>
        </li> */}
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
      {/* <span /> */}
      <div className='bottom'>
        <small>
          The name of this app is directly taken from the random url that Zeit's
          Now assigned the project.
        </small>
      </div>
    </StyledSidebar>
  );
};
const StyledSidebar = styled.aside`
  background: #efeeee;
  min-height: 100vh;
  padding: 10px 0;
  display: grid;
  grid-template-rows: min-content max-content auto 200px;
  align-items: flex-start;

  a {
    text-decoration: none;
    font-weight: bold;
    color: black;

    &:hover {
      color: #555;
    }
  }

  h1 {
    margin: 10px 0;
    padding-left: 40px;
  }

  ul {
    margin: 5px 0;
    list-style-type: none;

    li {
      font-size: 18px;
      margin: 1em 0;

      a {
        svg {
          margin-bottom: -1px;
          margin-right: 0.5em;
        }
      }
    }
  }

  div.bottom {
    padding: 40px;
    align-self: flex-end;

    small {
      font-size: 0.7em;
      color: #333;
    }
  }
`;

export default Sidebar;
