import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import styled from 'styled-components';
import { Income } from 'src/types';
import dayjs from 'dayjs';

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  amount: yup.number().required(),
  start_date: yup.date().required(),
  days_between: yup.number().required()
});

const IncomeForm = (props: { dispatch: any }) => {
  const { register, handleSubmit } = useForm({
    validationSchema
  });

  let history = useHistory();
  function onSubmit(data: any) {
    const payload: Income = {
      title: data.title,
      amount: parseFloat(data.amount),
      frequency: {
        start_date: dayjs(data.start_date).format('YYYY-MM-DD'),
        days_between: data.days_between
      }
    };

    props.dispatch({
      type: 'ADD_INCOME',
      payload
    });

    history.replace('/');
  }

  return (
    <div>
      <h2>Add Expense</h2>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label>Title</label>
        <input name='title' ref={register} />

        <label>Amount</label>
        <input name='amount' type='number' step='0.01' ref={register} />

        <label>Start Date</label>
        <input name='start_date' type='date' ref={register} />

        <label>Days Between (for two weeks put 14)</label>
        <input name='days_between' type='number' ref={register} />

        <input type='submit' />
      </StyledForm>
    </div>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
    max-width: 200px;
    box-sizing: border-box;
  }
  input[type='submit'] {
    appearance: none;
    border: 1px solid lightgray;
    margin: 10px 0;
    padding: 8px 8px;
    cursor: pointer;

    &:hover {
      transition: all 0.3s ease;
      background: lightgrey;
    }
  }
`;

export default connect()(IncomeForm);
