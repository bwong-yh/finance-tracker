import { useOutletContext } from 'react-router-dom';
import './Home.css';

// components
import TransactionForm from './TransactionForm';

const Home = () => {
  // receive props from passing down within the context property
  const user = useOutletContext();

  return (
    <div className='container'>
      <div className='content'>transaction list</div>
      <div className='sidebar'>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
