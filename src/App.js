import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpence from './components/IncomeExpence';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';


function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpence />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
