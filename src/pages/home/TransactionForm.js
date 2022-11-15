import { useState } from 'react';

const TransactionForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    console.log('name:', name);
    console.log('amount:', amount);
  };

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction Name:</span>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Amount ($):</span>
          <input
            type='number'
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
          />
        </label>
        <button className='btn'>Add Transaction</button>
      </form>
    </>
  );
};

export default TransactionForm;
