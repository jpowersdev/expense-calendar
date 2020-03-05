import { Action, State } from '../types';
import dayjs from 'dayjs';

const today = dayjs();
const initialValue: State = {
  income: [
    {
      title: 'paycheck',
      amount: 1000.0,
      frequency: {
        start_date: '2020-03-13',
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
    today: today.format('YYYY-MM-DD'),
    startOfWeek: 0,
    display: {
      day: parseInt(today.format('DD')),
      month: parseInt(today.format('M')),
      year: parseInt(today.format('YYYY'))
    }
  }
};

export default function reducer(state = initialValue, action: Action) {
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
        year: parseInt(state.calendar.today.split('-')[0]),
        month: parseInt(state.calendar.today.split('-')[1]),
        day: parseInt(state.calendar.today.split('-')[2])
      };

      return { ...state, calendar: { ...state.calendar, display } };
    case 'ADD_INCOME':
      let income = Array.from(state.income);
      income.push(action.payload);
      return { ...state, income };
    case 'ADD_EXPENSE':
      let expenses = Array.from(state.expenses);
      expenses.push(action.payload);
      return { ...state, expenses };
    default:
      return state;
  }
}
