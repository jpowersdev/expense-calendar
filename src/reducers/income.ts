import { Income, Action } from 'src/types';

const initialState: Income[] = [
  {
    title: 'paycheck',
    amount: 1000.0,
    frequency: {
      start_date: '2020-03-13',
      days_between: 14
    }
  }
];

function income(state = initialState, action: Action) {
  switch (action.type) {
    case 'ADD_INCOME':
      return [...state, action.payload];
    default:
      return state;
  }
}

export default income;
