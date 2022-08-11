import transactionsReducer from './transactions/transactionsReducer';
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesReducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const transactionsPersistConfig = {
  key: 'transactions',
  version: 1,
  storage,
};
const categoriesPersistConfig = {
  key: 'categories',
  version: 1,
  storage,
};

const persistedCategoriesReducer = persistReducer(
  categoriesPersistConfig,
  categoriesReducer
);

const persistedTransactionsReducer = persistReducer(
  transactionsPersistConfig,
  transactionsReducer
);

const store = configureStore({
  reducer: {
    transactions: persistedTransactionsReducer,
    categories: persistedCategoriesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export default store;
