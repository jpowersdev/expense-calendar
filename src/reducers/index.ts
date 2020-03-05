import calendar from './calendar';
import income from './income';
import expenses from './expense';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  expenses,
  income,
  calendar
});
export default reducer;
