import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducer';

const store = configureStore({ reducer });

store.subscribe(() => {
  if (process.env.NODE_ENV === 'development') console.log(store.getState());

  // window.localStorage.setItem('expense', JSON.stringify(store.getState()));
});

export default store;
