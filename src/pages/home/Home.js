import './Home.css';

// hooks
import useCollection from '../../hooks/useCollection';

// components
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import useAuthContext from '../../hooks/useAuthContext';

const Home = () => {
  // receive props from passing down within the context property
  const { user } = useAuthContext();
  const { documents, error } = useCollection('transactions', [
    'uid',
    '==',
    user.uid,
  ]);

  console.log(user);

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
