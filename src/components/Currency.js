import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
  };

  return (
    <div className='alert alert-secondary'>
      <span>Currency: {currency}</span>
      <select value={currency} onChange={handleCurrencyChange}>
        {/* ... options for different currencies */}
      </select>
    </div>
  );
};

export default Currency;
