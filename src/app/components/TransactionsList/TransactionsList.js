import React, {useContext} from 'react';

import {Helper} from '../../Helper';
import {GlobalContext} from '../../context/GlobalState'

import Transaction from './Transaction/Transaction';

export const TransactionsList = (props) => {
    const {transactions} = useContext(GlobalContext);
    let transactionList = <p>'No transactions found !'</p>;

    if (Helper.checkForInvalidArray(transactions)) {
        transactionList = <ul id="list" className="list">
            {transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction} />)}
        </ul>
    }

    return (
        <>
            <h3>History</h3>
            {transactionList}
        </>
    )
};

export default TransactionsList;
