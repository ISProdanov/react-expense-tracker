import React, {useContext} from 'react';

import {GlobalContext} from '../../../context/GlobalState'

const TransactionItem = (props) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const isPositive = props.transaction.amount > 0;

    return (
        <li className={!isPositive ? 'minus' : 'plus'}>
            {props.transaction.text}
            <span>{!isPositive ? '-' : '+'}${Math.abs(props.transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(props.transaction.id)}>x</button>
        </li>
    )
};

export default TransactionItem;
