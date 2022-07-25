import CategoriesList from 'components/categoriesList/CategoriesList';
import TransactionForm from 'components/transactionForm/TransactionForm';
import React from 'react';

const MainPage = () => {
  const isOpenCategoriesList = false;
  return (
    <>
      <header>
        <button type="button">
          {isOpenCategoriesList ? '<-- Go back' : 'Burger'}
        </button>
        <h1 className="title-page">
          {isOpenCategoriesList ? ' Категорії ' : 'Журнал витрат'}
        </h1>
      </header>
      <main>
        {isOpenCategoriesList ? (
          <CategoriesList />
        ) : (
          <>
            <TransactionForm />
            <button className="costs">Всі витрати</button>
            <button className="incomes">Всі прибутки</button>
          </>
        )}
      </main>
    </>
  );
};

export default MainPage;
