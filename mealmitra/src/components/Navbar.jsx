export default function Navbar({ setActivePage }) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setActivePage('login');
  };
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between px-4 py-4 bg-[#f7f4ef] border-b border-gray-200 gap-3">
      <h1 className="text-2xl font-bold tracking-wide text-[#3d2c1e]">
        MealMitra
      </h1>

      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => setActivePage('home')}
          className="text-[#3d2c1e] font-medium"
        >
          Home
        </button>

        <button
          onClick={() => setActivePage('dashboard')}
          className="text-[#3d2c1e] font-medium"
        >
          Dashboard
        </button>

        <button
          onClick={() => setActivePage('donations')}
          className="text-[#3d2c1e] font-medium"
        >
          Donations
        </button>

        <button
          onClick={() => setActivePage('mydonations')}
          className="text-[#3d2c1e] font-medium"
        >
          My Donations
        </button>

        <button
          onClick={() => setActivePage('profile')}
          className="text-[#3d2c1e] font-medium"
        >
          Profile
        </button>

        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg bg-red-500 text-white"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}