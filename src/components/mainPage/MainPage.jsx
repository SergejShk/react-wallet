import TransactionForm from '../TransactionForm/TransactionForm';
import CategoriesList from '../CategoriesList/CategoriesList';
import Header from '../Header/Header';
import s from './MainPage.module.css';
import { Component } from 'react';

const initialForm = {
  date: '2022-07-28',
  time: '14:14',
  summ: '',
  currency: 'UAH',
  comment: '',
  transType: 'costs',
};

class MainPage extends Component {
  state = {
    category: '',
    isCategoriesList: false,
    ...initialForm,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.categories.length && !prevState.category) {
      return { category: nextProps.categories[0].title };
    }
    return null;
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  setCategories = category => {
    this.setState({ category });
    this.handleCloseCategoriesList();
  };

  handleOpenCategoriesList = () => {
    this.setState({ isCategoriesList: true });
  };
  handleCloseCategoriesList = () => {
    this.setState({ isCategoriesList: false });
  };

  resetForm = () => {
    this.setState(initialForm);
  };

  render() {
    console.log('main page', this.props.categories);

    const {
      onIncomesBtnClick,
      onCostsBtnClick,
      addCategory,
      categories,
      addTransaction,
    } = this.props;
    const { isCategoriesList, ...form } = this.state;
    return (
      <div className="container">
        <Header
          title={isCategoriesList ? ' Категорії ' : 'Журнал витрат'}
          icon={isCategoriesList ? '#icon-arrow-left' : null}
          cbOnClick={this.handleCloseCategoriesList}
        />
        <main className={s.main}>
          {isCategoriesList ? (
            <CategoriesList
              categories={categories[this.state.transType]}
              addCategory={addCategory}
              setCategories={this.setCategories}
              transType={this.state.transType}
            />
          ) : (
            <>
              <TransactionForm
                handleChange={this.handleChange}
                form={form}
                handleOpenCategoriesList={this.handleOpenCategoriesList}
                addTransaction={addTransaction}
                resetForm={this.resetForm}
              />
              <div className={s.blockBtn}>
                <button className={s.costs} onClick={onCostsBtnClick}>
                  Всі витрати
                </button>
                <button className={s.incomes} onClick={onIncomesBtnClick}>
                  Всі прибутки
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    );
  }
}
export default MainPage;
