import React from 'react';
import styled from 'styled-components';
import dayjs, { Dayjs } from 'dayjs';

import { connect } from 'react-redux';
import { Income, Expense } from '../../types';

function isIncome(income: Income[], current_day: Dayjs) {
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

function isExpense(expenses: Expense[], current_day: Dayjs) {
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

type Props = {
  day: Dayjs;
  today?: boolean;
  income: any[];
  expenses: any[];
};
const DayCard = (props: Props) => {
  const income = isIncome(props.income, props.day);
  const expenses = isExpense(props.expenses, props.day);

  return (
    <StyledCard isToday={props.today}>
      <span>{props.day.date()}</span>
      <div>
        {income.length > 0 && (
          <div className='income'>
            ${income.reduce((prev, curr) => prev + curr).toFixed(2)}
          </div>
        )}
        {expenses.length > 0 && (
          <div className='expense'>
            ${expenses.reduce((prev, curr) => prev + curr).toFixed(2)}
          </div>
        )}
      </div>
    </StyledCard>
  );
};

type StyledProps = {
  isToday?: boolean;
};
const StyledCard = styled.div<StyledProps>`
  height: 90px;
  text-align: right;
  /* padding: 5px; */
  box-sizing: border-box;
  border: 1px solid black;

  position: relative;

  & > div {
    box-sizing: border-box;
    height: 100%;
    text-align: left;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  div.income {
    padding: 2px 5px;
    background: #88c58a;
  }
  div.expense {
    padding: 2px 5px;
    background: #bd5554;
  }

  span {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  background: ${props => (props.isToday ? '#EFEEEE' : 'white')};
`;

function mapStateToProps(state: any) {
  const { expenses, income } = state;

  return {
    expenses,
    income
  };
}

export default connect(mapStateToProps)(DayCard);
