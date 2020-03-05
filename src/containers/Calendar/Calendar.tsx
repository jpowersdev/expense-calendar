import React from 'react';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import relativeTime from 'dayjs/plugin/relativeTime';

import DayCard from '../../components/DayCard/DayCard';
import styled from 'styled-components';

import { connect } from 'react-redux';
dayjs.extend(weekday);
dayjs.extend(relativeTime);

function determineGap(date: dayjs.Dayjs) {
  const firstDay = dayjs(date.format('YYYY-MM-01'));

  if (firstDay.weekday(0).isSame(firstDay)) {
    return 0;
  } else {
    const str = firstDay.weekday(0).from(firstDay);
    if (str[0] === 'a') {
      return 1;
    } else {
      return parseInt(str[0]);
    }
  }
}

function MonthCalendar(props: any) {
  const { date } = props;

  function decrement() {
    props.dispatch({ type: 'DECREMENT_MONTH' });
  }

  function increment() {
    props.dispatch({ type: 'INCREMENT_MONTH' });
  }

  return (
    <StyledApp>
      <div className='App'>
        <div className='today'>
          <button
            onClick={() => {
              props.dispatch({ type: 'CHANGE_MONTH_TO_CURRENT' });
            }}
          >
            Today
          </button>
        </div>
        <div className='header'>
          <span onClick={() => decrement()}>{'<'}</span>
          <h2>{date.format("MMMM 'YY")}</h2>
          <span onClick={() => increment()}>{'>'}</span>
        </div>

        <Calendar>
          <div className='labels'>
            <strong>Sunday</strong>
            <strong>Monday</strong>
            <strong>Tuesday</strong>
            <strong>Wednesday</strong>
            <strong>Thursday</strong>
            <strong>Friday</strong>
            <strong>Saturday</strong>
          </div>
          <div className='days'>
            {Array(determineGap(date))
              .fill(0)
              .map((_: any, index: number) => (
                <div key={index} />
              ))}
            {props.days
              .map((day: number) => {
                return dayjs(
                  `${props.year}-${props.month}-${day}`,
                  'YYYY-MM-DD'
                );
              })
              .map((day: dayjs.Dayjs, i: number) => {
                return (
                  <DayCard
                    day={day}
                    today={day.isSame(props.today, 'day')}
                    key={i}
                  />
                );
              })}
          </div>
        </Calendar>
      </div>
    </StyledApp>
  );
}
function mapStateToProps(state: any) {
  const { year, month, day } = state.calendar.display;

  const date = dayjs(`${year}-${month}-${day}`, 'YYYY-MM-DD');

  return {
    today: dayjs(state.calendar.today),
    date,
    month,
    year: year,
    days: Array(date.daysInMonth())
      .fill(0)
      .map((_, i) => i + 1)
  };
}

const StyledApp = styled.section`
  .App {
    .today {
      position: relative;
      max-width: 90ch;
      margin: 0 auto;

      button {
        position: absolute;
        top: 0;
        right: 0;
        outline: none;
        appearance: none;
        border: 2px solid #dddddd;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;

        &:hover {
          background: #eee;
          opacity: 0.8;
        }
      }
    }
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;

    h2 {
      text-align: center;
      margin: 0;
      width: 180px;
    }

    span {
      margin: 0 8px;
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

const Calendar = styled.div`
  max-width: 90ch;
  margin: 10px auto;

  .labels,
  .days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 10px;
  }

  .labels {
    strong {
      display: block;
      margin: 5px 0;
    }
  }
`;

export default connect(mapStateToProps)(MonthCalendar);
