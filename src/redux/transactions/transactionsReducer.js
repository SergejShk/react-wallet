import { combineReducers } from '@reduxjs/toolkit';
import { actionTypes } from './transactionsActions';

const costsReducer = (state = [], action) => {
  let data;
  switch (action.type) {
    case actionTypes.addCosts:
      data = [...state, action.payload];
      return data;
    case actionTypes.removeCosts:
      data = state.filter(el => el.id !== action.payload);
      return data;
    default:
      return state;
  }
};

const incomesReducer = (state = [], action) => {
  let data;
  switch (action.type) {
    case actionTypes.addIncomes:
      data = [...state, action.payload];
      return data;
    case actionTypes.removeIncomes:
      data = state.filter(el => el.id !== action.payload);
      return data;
    default:
      return state;
  }
};

const transactionReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
});

export default transactionReducer;
