import { useEffect, useState } from 'react';
import TransactionForm from '../TransactionForm/TransactionForm';
import CategoriesList from '../CategoriesList/CategoriesList';
import Header from '../Header/Header';
import s from './MainPage.module.css';
import { CategoriesContext } from '../../context/CategoriesProvider';
import { useContext } from 'react';

const initialForm = {
  category: '',
  date: '2022-07-28',
  time: '14:14',
  summ: '',
  currency: 'UAH',
  comment: '',
  transType: 'costs',
};

const MainPage = ({ onOpenPage }) => {
  const [form, setForm] = useState(initialForm);
  const [isCategoriesList, setIsCategoriesList] = useState(false);

  const categoriesContextValue = useContext(CategoriesContext);

  useEffect(() => {
    const title = categoriesContextValue[form.transType][0].title;
    setForm(prev => ({ ...prev, category: title }));
  }, [categoriesContextValue, form.transType]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const setCategories = category => {
    setForm(prev => ({ ...prev, category }));
    handleToggleCategoriesList();
  };

  const handleToggleCategoriesList = () => {
    setIsCategoriesList(prev => !prev);
  };

  const resetForm = () => {
    setForm(initialForm);
  };
  return (
    <div className="container">
      <Header
        title={isCategoriesList ? ' Категорії ' : 'Журнал витрат'}
        icon={isCategoriesList ? '#icon-arrow-left' : null}
        cbOnClick={handleToggleCategoriesList}
      />
      <main className={s.main}>
        {isCategoriesList ? (
          <CategoriesList
            setCategories={setCategories}
            transType={form.transType}
          />
        ) : (
          <>
            <TransactionForm
              handleChange={handleChange}
              form={form}
              handleOpenCategoriesList={handleToggleCategoriesList}
              resetForm={resetForm}
            />
            <div className={s.blockBtn}>
              <button className={s.costs} onClick={() => onOpenPage('costs')}>
                Всі витрати
              </button>
              <button
                className={s.incomes}
                onClick={() => onOpenPage('incomes')}
              >
                Всі прибутки
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default MainPage;
