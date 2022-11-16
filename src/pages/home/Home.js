import { useOutletContext } from 'react-router-dom';
import './Home.css';

// hooks
import useCollection from '../../hooks/useCollection';

// components
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

const Home = () => {
  // receive props from passing down within the context property
  const user = useOutletContext();
  const { documents, error } = useCollection('transactions');

  return (
    <div className='container'>
      <div className='content'>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className='sidebar'>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
