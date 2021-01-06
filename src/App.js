import React from 'react';

import './App.css';
import { GlobalProvider } from './context/GlobalState';

import Header from './components/Header/Header'
import Balance from './components/Balance/Balance'
import TransactionsList from './components/TransactionsList/TransactionsList'
import IncomeExpense from './components/TransactionBalances/TransactionBalance'
import AddTransaction from './components/AddTransaction/AddTransaction';

function App() {
    return (
        <GlobalProvider>
            <Header title='Expense Tracker'/>

            <div className="container">
                <Balance/>
                <IncomeExpense/>
                <TransactionsList/>
                <AddTransaction/>
            </div>
        </GlobalProvider>
    );
}

export default App;
