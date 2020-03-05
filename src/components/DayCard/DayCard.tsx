import React from 'react';
import { Dayjs } from 'dayjs';

import { connect } from 'react-redux';
import { StyledCard } from './styles';
import { isIncome, isExpense } from './utils';

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

function mapStateToProps(state: any) {
  const { expenses, income } = state;

  return {
    expenses,
    income
  };
}

export default connect(mapStateToProps)(DayCard);
