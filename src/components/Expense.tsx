import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import styled from 'styled-components';

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  amount: yup.number().required(),
  recurrance: yup.number().required()
});

type Props = {
  dispatch: any;
};
const Expense = (props: Props) => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  let history = useHistory();
  function onSubmit(data: any) {
    props.dispatch({
      type: 'ADD_EXPENSE',
      payload: {
        title: data.title,
        amount: parseFloat(data.amount),
        recurrance: {
          day: [parseInt(data.recurrance)]
        }
      }
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

export default connect()(Expense);
