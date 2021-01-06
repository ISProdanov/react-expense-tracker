import React, {useContext} from 'react';

import {Helper} from '../../Helper';
import {GlobalContext} from '../../context/GlobalState'

const Balance = (props) => {
    const {transactions} = useContext(GlobalContext);

    let balance = 0;


    if (Helper.checkForInvalidArray(transactions)) {
        transactions.forEach((transaction) => {
            if (transaction.amount !== 0) {
                balance += transaction.amount;
            }
        });
    }

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${balance.toFixed(2)}</h1>
        </>
    )
};

export default Balance;
