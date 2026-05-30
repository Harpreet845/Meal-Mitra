import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Donations from './pages/Donations';
import MyDonations from './pages/MyDonations';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';

export default function App() {
  const token = localStorage.getItem('token');

  const [activePage, setActivePage] = useState(
    token ? 'donations' : 'login'
  );

  return (
    <div className="min-h-screen bg-[#f7f4ef]">
      {activePage !== 'login' && activePage !== 'register' && (
        <Navbar setActivePage={setActivePage} />
      )}
      {activePage === 'home' && <Home />}
      {activePage === 'donations' && <Donations />}
      {activePage === 'login' && (<Login setActivePage={setActivePage} />)}
      {activePage === 'register' && (<Register setActivePage={setActivePage} />)}
      {activePage === 'mydonations' && <MyDonations />}
      {activePage === 'profile' && <Profile />}
      {activePage === 'dashboard' && <Dashboard />}
    </div>
  );
}