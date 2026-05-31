import { useEffect, useState } from "react";
import axios from "axios";
import DonationCard from '../components/DonationCard';
import donations from '../data/donations';

export default function Home({ setActivePage }) {
  const [stats, setStats] = useState({
    total: 0,
    available: 0,
    accepted: 0,
    delivered: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          "https://mealmitra-backend-t9ub.onrender.com/api/donations"
        );

        const donations = response.data;

        setStats({
          total: donations.length,
          available: donations.filter(
            (item) => (item.status || "Available") === "Available"
          ).length,
          accepted: donations.filter(
            (item) => item.status === "Accepted"
          ).length,
          delivered: donations.filter(
            (item) => item.status === "Delivered"
          ).length,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchStats();
  }, []);
  return (
    <div className="min-h-screen bg-[#f8f5f1] flex flex-col items-center px-6 pt-24">
      <h1 className="text-6xl font-bold text-[#3d2c1e] mb-4">
        MealMitra  
      </h1>

      <p className="text-lg text-gray-600 text-center max-w-xl mb-8">
        Share surplus food with NGOs and volunteers nearby and help reduce food waste.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => setActivePage("donate")}
          className="bg-[#5c3b22] text-white px-6 py-3 rounded-lg"
        >
          Donate Food
        </button>

        <button
          onClick={() => setActivePage("donations")}
          className="bg-[#5c3b22] text-white px-6 py-3 rounded-lg"
        >
          Browse Food
        </button>
      </div>
      <br></br>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl">
        <div className="bg-[#fdf6f1] p-5 rounded-2xl shadow border border-[#e6d7c6]">
          <h3 className="font-semibold">Total Donations</h3>
          <p className="text-3xl font-bold text-[#5c3b22]">
            {stats.total}
          </p>
        </div>

        <div className="bg-[#fdf6f1] p-5 rounded-2xl shadow border border-[#e6d7c6]">
          <h3 className="font-semibold">Available</h3>
          <p className="text-3xl font-bold text-[#5c3b22]">
            {stats.available}
          </p>
        </div>

        <div className="bg-[#fdf6f1] p-5 rounded-2xl shadow border border-[#e6d7c6]">
          <h3 className="font-semibold">Accepted</h3>
          <p className="text-3xl font-bold text-[#5c3b22]">
            {stats.accepted}
          </p>
        </div>

        <div className="bg-[#fdf6f1] p-5 rounded-2xl shadow border border-[#e6d7c6]">
          <h3 className="font-semibold">Delivered</h3>
          <p className="text-3xl font-bold text-[#5c3b22]">
            {stats.delivered}
          </p>
        </div>
      </div>
    </div>
  );
}