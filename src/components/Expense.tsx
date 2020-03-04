import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

type Props = {
  dispatch: any;
};
const Expense = (props: Props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [recurrance, setRecurrance] = useState('');

  let history = useHistory();
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    props.dispatch({
      type: 'ADD_EXPENSE',
      payload: {
        title,
        amount: parseFloat(amount),
        recurrance: {
          day: [parseInt(recurrance)]
        }
      }
    });

    history.replace('/');
  }

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          value={title}
          onChange={e => setTitle(e.target.value as string)}
        />
        <label>Amount</label>
        <input
          value={amount}
          onChange={e => setAmount(e.target.value as string)}
        />
        <label>Day</label>
        <input
          value={recurrance}
          onChange={e => setRecurrance(e.target.value as string)}
        />
        <input type='submit' />
      </form>
    </div>
  );
};

export default connect()(Expense);
