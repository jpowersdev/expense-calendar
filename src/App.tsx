import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MonthCalendar from './components/Month/Calendar';
import Sidebar from './components/Sidebar';
import Expense from './components/Expense';

function App() {
  return (
    <StyledApp>
      <Router>
        <Sidebar />
        <main>
          <Switch>
            <Route exact path='/'>
              <MonthCalendar />
            </Route>
            <Route path='/expense'>
              <Expense />
            </Route>
          </Switch>
        </main>
      </Router>
    </StyledApp>
  );
}
const StyledApp = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 250px auto;

  main,
  aside {
    max-height: 100vh;
    overflow-y: auto;
  }

  main {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 40px;
  }
`;

export default App;
