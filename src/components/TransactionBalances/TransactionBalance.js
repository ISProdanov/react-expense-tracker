import React, {useContext} from 'react';

import {Helper} from '../../Helper';
import {GlobalContext} from '../../context/GlobalState';

const TransactionBalance = (props) => {
    const {transactions} = useContext(GlobalContext);

    const total = {
        income: 0,
        expense: 0,
    };

    if (Helper.checkForInvalidArray(transactions)) {
        transactions.forEach((transaction) => {
            if (transaction.amount > 0) {
                total.income += transaction.amount;
            } else {
                total.expense += transaction.amount;
            }
        })
    }

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${total.income.toFixed(2)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${total.expense.toFixed(2)}</p>
            </div>
        </div>
    )
};

export default TransactionBalance;
