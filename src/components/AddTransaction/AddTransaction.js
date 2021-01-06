import React, {useState, useContext} from 'react';

import {GlobalContext} from '../../context/GlobalState';

const Transaction = (props) => {
    const {addTransaction} = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    // TODO:: Make component for every form Element, use separate file for init controls asap

    const addTransactionItem = (event) => {
        event.preventDefault();

        addTransaction({
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        })
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        value={text}
                        placeholder="Enter text..."
                        onChange={(event) => setText(event.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br/> (negative - expense, positive - income)</label>
                    <input
                        type="number"
                        value={amount}
                        placeholder="Enter amount..."
                        onChange={(event) => setAmount(event.target.value)}
                    />
                </div>
                <button className="btn" onClick={(e) => addTransactionItem(e)}>Add transaction</button>
            </form>
        </>
    );
};

export default Transaction;
