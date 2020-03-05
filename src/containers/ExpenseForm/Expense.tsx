import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import styled from 'styled-components';
import { Expense } from 'src/types';

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  amount: yup.number().required(),
  recurrance: yup.number().required()
});

const ExpenseForm = (props: { dispatch: any }) => {
  const { register, handleSubmit } = useForm({
    validationSchema
  });

  let history = useHistory();
  function onSubmit(data: any) {
    const payload: Expense = {
      title: data.title,
      amount: parseFloat(data.amount),
      recurrance: {
        day: [parseInt(data.recurrance)]
      }
    };

    props.dispatch({
      type: 'ADD_EXPENSE',
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

        <label>Day</label>
        <input name='recurrance' type='number' ref={register} />

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

export default connect()(ExpenseForm);
