import React, { useEffect } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { connect } from 'react-redux';

type Props = {
  day: dayjs.Dayjs;
  today?: boolean;
  income: any[];
  expenses: any[];
};

const DayCard = (props: Props) => {
  const paydays = isPayday();
  const expenses = isExpense();

  useEffect(() => {
    // console.log(expenses);
  }, [expenses]);

  function isPayday() {
    let list = [];

    for (let elem of props.income) {
      if (
        elem.frequency.start_date.isSame(props.day) ||
        props.day.diff(elem.frequency.start_date, 'day') %
          elem.frequency.days_between ===
          0
      ) {
        list.push(elem.amount);
      }
    }

    return list;
  }

  function isExpense() {
    let list = [];

    for (let elem of props.expenses) {
      for (let day of elem.recurrance.day) {
        if (parseInt(props.day.format('D')) === day) {
          list.push(elem.amount);
        }
      }
    }

    return list;
  }

  return (
    <StyledCard isToday={props.today}>
      <span>{props.day.date()}</span>
      <div>
        {paydays.length > 0 && (
          <div className='payday'>
            ${paydays.reduce((prev, curr) => prev + curr)}
          </div>
        )}
        {expenses.length > 0 && (
          <div className='expense'>
            ${expenses.reduce((prev, curr) => prev + curr)}
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

  div.payday {
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
