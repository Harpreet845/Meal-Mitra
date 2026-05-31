export default function Navbar({
  activePage,
  setActivePage,
}) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setActivePage('login');
  };
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between px-4 py-4 bg-[#f7f4ef] border-b border-gray-200 gap-3">
      <h1 className="text-2xl font-bold tracking-wide text-[#3d2c1e]">
        MealMitra
      </h1>

      <div className="flex flex-wrap justify-center gap-0.5">
        <button
          onClick={() => setActivePage('home')}
          className={`px-1 md:px-2 py-0.5 rounded-md font-medium transition
            ${
              activePage === 'home'
                ? 'bg-[#9b7c65] text-white'
                : 'text-[#3d2c1e] hover:bg-[#e8d8c4]'
            }`}
        >
          Home
        </button>
        <span className="text-[#3d2c1e]/20">|</span>

        <button
          onClick={() => setActivePage('donations')}
          className={`px-1 md:px-2 py-0.5 rounded-md font-medium transition
            ${
              activePage === 'donations'
                ? 'bg-[#9b7c65] text-white'
                : 'text-[#3d2c1e] hover:bg-[#e8d8c4]'
            }`}
        >
          Donations
        </button>
        <span className="text-[#3d2c1e]/20">|</span>

        <button
          onClick={() => setActivePage('donate')}
          className={`px-1 md:px-2 py-0.5 rounded-md font-medium transition
            ${
              activePage === 'donate'
                ? 'bg-[#9b7c65] text-white'
                : 'text-[#3d2c1e] hover:bg-[#e8d8c4]'
            }`}
        >
          Donate Food
        </button>
        <span className="text-[#3d2c1e]/20">|</span>

        <button
          onClick={() => setActivePage('mydonations')}
          className={`px-1 md:px-2 py-0.5 rounded-md font-medium transition
            ${
              activePage === 'mydonations'
                ? 'bg-[#9b7c65] text-white'
                : 'text-[#3d2c1e] hover:bg-[#e8d8c4]'
            }`}
        >
          My Donations
        </button>
        <span className="text-[#3d2c1e]/20">|</span>

        <button
          onClick={() => setActivePage('profile')}
          className={`px-1 md:px-2 py-0.5 rounded-md font-medium transition
            ${
              activePage === 'profile'
                ? 'bg-[#9b7c65] text-white'
                : 'text-[#3d2c1e] hover:bg-[#e8d8c4]'
            }`}
        >
          Profile
        </button>
      </div>
    </nav>
  );
}