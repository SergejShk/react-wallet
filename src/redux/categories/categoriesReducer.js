import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addCostsCategory, addIncomesCategory } from './categoriesAtions';

const incomesCategoriesReducer = createReducer([], {
  [addIncomesCategory]: (state, { payload }) => [...state, payload],
});

const costsCategoriesReducer = createReducer([], {
  [addCostsCategory]: (state, { payload }) => [...state, payload],
});

const categoriesReducer = combineReducers({
  costs: costsCategoriesReducer,
  incomes: incomesCategoriesReducer,
});

export default categoriesReducer;
