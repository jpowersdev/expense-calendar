import { Income, Expense } from 'src/types';

import dayjs, { Dayjs } from 'dayjs';

export function isIncome(income: Income[], current_day: Dayjs) {
  let list = [];

  for (let elem of income) {
    const start_date = dayjs(elem.frequency.start_date);
    if (
      start_date.isSame(current_day) ||
      current_day.diff(start_date, 'day') % elem.frequency.days_between === 0
    ) {
      list.push(elem.amount);
    }
  }

  return list;
}

export function isExpense(expenses: Expense[], current_day: Dayjs) {
  let list = [];

  for (let elem of expenses) {
    for (let day of elem.recurrance.day) {
      if (parseInt(current_day.format('D')) === day) {
        list.push(elem.amount);
      }
    }
  }

  return list;
}
