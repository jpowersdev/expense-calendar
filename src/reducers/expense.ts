import { Expense, Action } from 'src/types';

const initialState: Expense[] = [
  {
    title: 'rent',
    amount: 1000.0,
    recurrance: {
      day: [1, 12]
    }
  }
];

function expenses(state = initialState, action: Action) {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload];
    default:
      return state;
  }
}

export default expenses;
