import './Home.css';

// components
import TransactionForm from './TransactionForm';

const Home = () => {
  return (
    <div className='container'>
      <div className='content'>transaction list</div>
      <div className='sidebar'>
        <TransactionForm />
      </div>
    </div>
  );
};

export default Home;
