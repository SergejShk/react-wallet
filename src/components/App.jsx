import { useState } from 'react';

import MainPage from './MainPage/MainPage';
import TransactionHistoryPage from './TransactionHistoryPage/TransactionHistoryPage';

export const App = () => {
  const [activePage, setActivePage] = useState('main');

  const onOpenPage = activePage => {
    setActivePage(activePage);
  };

  switch (activePage) {
    case 'main':
      return <MainPage onOpenPage={onOpenPage} />;
    case 'costs':
      return (
        <TransactionHistoryPage
          transType={activePage}
          onReturnBtnClick={onOpenPage}
        />
      );
    case 'incomes':
      return (
        <TransactionHistoryPage
          transType={activePage}
          onReturnBtnClick={onOpenPage}
        />
      );
    default:
      return;
  }
};
