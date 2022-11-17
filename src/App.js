import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

// components
import Navbar from './components/Navbar/Navbar';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';

// pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

// context
import useAuthContext from './hooks/useAuthContext';

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />

          <Routes>
            {/* protected routes */}
            <Route path='/' element={<ProtectedRoutes user={user} />}>
              <Route index element={<Home />} />
            </Route>
            {/* public routes */}
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
