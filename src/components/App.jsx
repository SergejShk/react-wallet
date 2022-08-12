import EditPage from 'pages/EditPage';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('./MainPage/MainPage'));
const TransactionHistoryPage = lazy(() =>
  import('./TransactionHistoryPage/TransactionHistoryPage')
);

export const App = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route
          path="/history/:transType"
          element={<TransactionHistoryPage />}
        />
        <Route path="/edit/:transType/:id/*" element={<EditPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
