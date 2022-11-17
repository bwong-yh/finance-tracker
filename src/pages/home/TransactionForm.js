import { useEffect, useState } from 'react';

// hooks
import useFirestore from '../../hooks/useFirestore';

const TransactionForm = ({ uid }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const { response, addDocument } = useFirestore('transactions');

  const handleSubmit = e => {
    e.preventDefault();

    addDocument({ uid, name, amount });
  };

  useEffect(() => {
    if (response.success) {
      setName('');
      setAmount('');
    }
  }, [response.success]);

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
