import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

// pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<Navigate to='/' />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
