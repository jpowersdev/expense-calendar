import dayjs from 'dayjs';

export type Expense = {
  title: string;
  amount: number;
  recurrance: {
    day: number[];
  };
};

export type Income = {
  title: string;
  amount: number;
  frequency: {
    start_date: string;
    days_between: number;
  };
};

export type Calendar = {
  today: string;
  startOfWeek: number;
  display: {
    day: number;
    month: number;
    year: number;
  };
};

export type State = {
  expenses: Expense[];
  income: Income[];
  calendar: Calendar;
};

export type Action = {
  type: string;
  payload: any;
};
