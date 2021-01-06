import React, {useState, useContext} from 'react';

import  Input from '../../UI/Input/Input';
import {GlobalContext} from '../../context/GlobalState';

const Transaction = (props) => {
    const {addTransaction} = useContext(GlobalContext);
    const [text, setTransactionDescription] = useState('');
    const [amount, setAmount] = useState(0);

    // TODO:: Make component for every form Element, use separate file for init controls asap

    const onDescriptionUpdate = (description) => {
        setTransactionDescription(description)
    };

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
                    <Input
                        value={text}
                        label='Description'
                        placeholder='A short description...'
                        onInputChange={onDescriptionUpdate}
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
