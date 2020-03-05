import { Action, Calendar } from 'src/types';
import dayjs from 'dayjs';

const today = dayjs();
const initialState: Calendar = {
  today: today.format('YYYY-MM-DD'),
  startOfWeek: 0,
  display: {
    day: parseInt(today.format('DD')),
    month: parseInt(today.format('M')),
    year: parseInt(today.format('YYYY'))
  }
};

function calendar(state: Calendar = initialState, action: Action) {
  switch (action.type) {
    case 'DECREMENT_MONTH': {
      const { month, year } = state.display;
      const newMonth = month === 1 ? 12 : month - 1;
      const newYear = month === 1 ? year - 1 : year;
      return {
        ...state,
        display: {
          ...state.display,
          month: newMonth,
          year: newYear
        }
      };
    }
    case 'INCREMENT_MONTH': {
      const { month, year } = state.display;
      const newMonth = month === 12 ? 1 : month + 1;
      const newYear = month === 1 ? year + 1 : year;
      return {
        ...state,
        display: {
          ...state.display,
          month: newMonth,
          year: newYear
        }
      };
    }
    case 'CHANGE_MONTH_TO_CURRENT':
      let display = {
        year: parseInt(state.today.split('-')[0]),
        month: parseInt(state.today.split('-')[1]),
        day: parseInt(state.today.split('-')[2])
      };

      return { ...state, display };
    default:
      return state;
  }
}

export default calendar;
