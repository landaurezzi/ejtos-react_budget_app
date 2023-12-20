import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const currencies = ["$", "£", "€", "₹"];

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);
    const [newBudget, setNewBudget] = useState(budget);

    useEffect(() => {
        // Update the context with the new currency when it changes
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
    }, [selectedCurrency, dispatch]);

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
        // Update the currency in the context or wherever you store it
        // This is just a placeholder, replace it with the actual logic to update the currency
        // For example, if currency is stored in AppContext, you might have a function like setCurrency
        // that you can call here.
        console.log("Selected currency:", event.target.value);
    }

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {selectedCurrency}{budget}</span>
            <div className="input-group" style={{ marginTop: '1rem' }}>
                <div className="input-group-prepend">
                    <select className="custom-select" value={selectedCurrency} onChange={handleCurrencyChange}>
                        <option value="currency">Currency</option>
                        {currencies.map((cur, index) => (
                            <option key={index} value={cur}>{cur}</option>
                        ))}
                    </select>
                </div>
                <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            </div>
        </div>
    );
};

export default Budget;
