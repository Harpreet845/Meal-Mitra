import {
  FaHome,
  FaUtensils,
  FaPlusCircle,
  FaClipboardList,
  FaUser
} from "react-icons/fa";

export default function BottomNav({ setActivePage }) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg flex justify-around py-3 z-50">

      <button onClick={() => setActivePage("home")}
        className="flex flex-col items-center text-sm text-[#3d2c1e]">
        <FaHome size={20} />
        <span>Home</span>
      </button>

      <button onClick={() => setActivePage("donations")}
        className="flex flex-col items-center text-sm text-[#3d2c1e]">
        <FaUtensils size={20} />
        <span>Food</span>
      </button>

      <button onClick={() => setActivePage("dashboard")}
        className="flex flex-col items-center text-sm text-[#5c3b22]">
        <FaPlusCircle size={28} />
        <span>Donate</span>
      </button>

      <button onClick={() => setActivePage("mydonations")}
        className="flex flex-col items-center text-sm text-[#3d2c1e]">
        <FaClipboardList size={20} />
        <span>My Food</span>
      </button>

      <button onClick={() => setActivePage("profile")}
        className="flex flex-col items-center text-sm text-[#3d2c1e]">
        <FaUser size={20} />
        <span>Profile</span>
      </button>

    </div>
  );
}