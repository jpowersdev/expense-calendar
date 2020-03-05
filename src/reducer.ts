import calendar from './containers/Calendar/reducer';
import income from './containers/IncomeForm/reducer';
import expenses from './containers/ExpenseForm/reducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  expenses,
  income,
  calendar
});
export default reducer;
