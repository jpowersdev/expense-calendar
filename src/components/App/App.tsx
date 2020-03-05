import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MonthCalendar from '../../containers/Calendar/Calendar';
import Sidebar from '../Sidebar/Sidebar';
import Expense from '../../containers/ExpenseForm/Expense';
import Income from '../../containers/IncomeForm/Income';
import { StyledApp } from './styles';

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
            <Route path='/income'>
              <Income />
            </Route>
          </Switch>
        </main>
      </Router>
    </StyledApp>
  );
}

export default App;
