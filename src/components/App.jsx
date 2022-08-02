import { Component } from 'react';
import lsApi from '../utils/localStorage';
import MainPage from './MainPage/MainPage';
import TransactionHistoryPage from './TransactionHistoryPage/TransactionHistoryPage';

export class App extends Component {
  state = {
    activePage: 'main',
    categories: [],
    costsCategories: [],
    incomesCategories: [],
    costs: [],
    incomes: [],
  };

  componentDidMount() {
    const initialCategories = [{ title: 'Різне', id: '2' }];
    const newCategories = lsApi.getDataFromLS(
      lsApi.keys.CATEGORIES,
      initialCategories
    );
    const costs = lsApi.getDataFromLS(lsApi.keys.COSTS, []);
    const incomes = lsApi.getDataFromLS(lsApi.keys.INCOMES, []);
    this.setState({ categories: newCategories, costs, incomes });
  }

  componentDidUpdate(prevProps, prevState) {
    const { categories, costs, incomes } = this.state;
    if (prevState.categories !== categories) {
      lsApi.setDataToLS(lsApi.keys.CATEGORIES, categories);
    }
    if (prevState.costs !== costs) {
      lsApi.setDataToLS(lsApi.keys.COSTS, costs);
    }
    if (prevState.incomes !== incomes) {
      lsApi.setDataToLS(lsApi.keys.INCOMES, incomes);
    }
  }

  addCategory = (newCategory, transType) => {
    const category = transType + 'Categories';

    this.setState(prevState => ({
      [category]: [...prevState[category], newCategory],
    }));
  };

  onIncomesBtnClick = () => {
    this.setState({ activePage: 'incomes' });
  };

  onCostsBtnClick = () => {
    this.setState({ activePage: 'costs' });
  };
  onReturnBtnClick = () => {
    this.setState({ activePage: 'main' });
  };

  addTransaction = transaction => {
    const { transType } = transaction;
    this.setState(prevState => ({
      [transType]: [...prevState[transType], transaction],
    }));
  };

  render() {
    const { activePage, costsCategories, incomesCategories } = this.state;
    switch (activePage) {
      case 'main':
        return (
          <MainPage
            addCategory={this.addCategory}
            onIncomesBtnClick={this.onIncomesBtnClick}
            onCostsBtnClick={this.onCostsBtnClick}
            categories={{ costs: costsCategories, incomes: incomesCategories }}
            addTransaction={this.addTransaction}
          />
        );
      case 'costs':
        return (
          <TransactionHistoryPage
            transType={activePage}
            onReturnBtnClick={this.onReturnBtnClick}
          />
        );
      case 'incomes':
        return (
          <TransactionHistoryPage
            transType={activePage}
            onReturnBtnClick={this.onReturnBtnClick}
          />
        );
      default:
        return;
    }
  }
}
