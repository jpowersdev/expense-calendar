import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import dayjs from 'dayjs';

import { configureStore } from '@reduxjs/toolkit';

type Expense = {
  title: string;
  amount: number;
  recurrance: {
    day: number[];
  };
};

type Income = {
  title: string;
  amount: number;
  frequency: {
    start_date: dayjs.Dayjs;
    days_between: number;
  };
};

type Calendar = {
  today: dayjs.Dayjs;
  startOfWeek: number;
  display: {
    day: number;
    month: number;
    year: number;
  };
};

type State = {
  expenses: Expense[];
  income: Income[];
  calendar: Calendar;
};

type Action = {
  type: string;
  payload: any;
};

const today = dayjs();
const initialValue: State = {
  income: [
    {
      title: 'paycheck',
      amount: 1000.0,
      frequency: {
        start_date: dayjs('2020-03-13'),
        days_between: 14
      }
    }
  ],
  expenses: [
    {
      title: 'rent',
      amount: 1000.0,
      recurrance: {
        day: [1, 12]
      }
    }
  ],
  calendar: {
    today,
    startOfWeek: 0,
    display: {
      day: parseInt(today.format('DD')),
      month: parseInt(today.format('M')),
      year: parseInt(today.format('YYYY'))
    }
  }
};

function reducer(state = initialValue, action: Action) {
  switch (action.type) {
    case 'DECREMENT_MONTH': {
      const { month, year } = state.calendar.display;
      const newMonth = month === 1 ? 12 : month - 1;
      const newYear = month === 1 ? year - 1 : year;
      return {
        ...state,
        calendar: {
          ...state.calendar,
          display: {
            ...state.calendar.display,
            month: newMonth,
            year: newYear
          }
        }
      };
    }
    case 'INCREMENT_MONTH': {
      const { month, year } = state.calendar.display;
      const newMonth = month === 12 ? 1 : month + 1;
      const newYear = month === 1 ? year + 1 : year;
      return {
        ...state,
        calendar: {
          ...state.calendar,
          display: {
            ...state.calendar.display,
            month: newMonth,
            year: newYear
          }
        }
      };
    }
    case 'CHANGE_MONTH_TO_CURRENT':
      let display = {
        day: parseInt(state.calendar.today.format('DD')),
        month: parseInt(state.calendar.today.format('M')),
        year: parseInt(state.calendar.today.format('YYYY'))
      };

      return { ...state, calendar: { ...state.calendar, display } };
    case 'ADD_EXPENSE':
      let expenses = Array.from(state.expenses);
      expenses.push(action.payload);
      return { ...state, expenses };
    default:
      return state;
  }
}

const store = configureStore({ reducer });

store.subscribe(() => {
  console.log(store.getState());

  // window.localStorage.setItem('expense', JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
