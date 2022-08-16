import { getValue } from '@testing-library/user-event/dist/utils';
import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-3dac9-default-rtdb.firebaseio.com/';

const transformDataObj = categories =>
  categories
    ? Object.entries(categories).map(([id, data]) => ({
        id,
        ...data,
      }))
    : [];

export const getCategoriesApi = async () => {
  const response = await axios.get('categories.json');
  if (response.data === null) return { incomes: [], costs: [] };

  const incomes = transformDataObj(response.data.incomes);

  const costs = transformDataObj(response.data.costs);

  return {
    incomes,
    costs,
  };
};

export const addCategoryApi = async (type, category) => {
  const response = await axios.post(`categories/${type}.json`, category);
  return {
    id: response.data.name,
    ...category,
  };
};

export const addTransactionApi = async transaction => {
  const { transType } = transaction;
  const response = await axios.post(
    `transactions/${transType}.json`,
    transaction
  );
  return {
    id: response.data.name,
    ...transaction,
  };
};

export const getTransactionsApi = async () => {
  const response = await axios.get('transactions.json');
  if (response.data === null) return { incomes: [], costs: [] };

  const incomes = transformDataObj(response.data.incomes);

  const costs = transformDataObj(response.data.costs);

  return {
    incomes,
    costs,
  };
};