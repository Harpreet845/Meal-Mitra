import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Donations from './pages/Donations';
import MyDonations from './pages/MyDonations';
import Profile from './pages/Profile';
import DonationForm from './components/DonationForm';

export default function App() {
  const token = localStorage.getItem('token');
  const [activePage, setActivePage] = useState(
    token ? 'home' : 'login'
  );
  console.log("Token =", token);

  return (
  <>
  <Navbar
    activePage={activePage}
    setActivePage={setActivePage}
  />
    <div className="min-h-screen">
      {activePage === 'home' && <Home setActivePage={setActivePage}/>}
      {activePage === 'donations' && <Donations />}
      {activePage === 'login' && (
        <Login setActivePage={setActivePage} />
      )}
      {activePage === 'register' && (
        <Register setActivePage={setActivePage} />
      )}
      {activePage === 'donate' && (
        <div className="min-h-screen bg-[#f8f5f1] py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <DonationForm />
          </div>
        </div>
      )}
      {activePage === 'mydonations' && <MyDonations />}
      {activePage === 'profile' && (
        <Profile setActivePage={setActivePage} />
      )}
    </div>
  </>
  )
}