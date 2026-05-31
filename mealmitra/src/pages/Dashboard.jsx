import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    available: 0,
    accepted: 0,
    delivered: 0,
  });

  const fetchStats = async () => {
    try {
      const response = await axios.get(
        'https://mealmitra-backend-t9ub.onrender.com/api/donations'
      );

      const donations = response.data;

      setStats({
        total: donations.length,
        available: donations.filter(
          (item) => (item.status || 'Available') === 'Available'
        ).length,
        accepted: donations.filter(
          (item) => item.status === 'Accepted'
        ).length,
        delivered: donations.filter(
          (item) => item.status === "Delivered"
        ).length,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-[#f8f5f1] to-[#efe6dd]">
      <h1 className="text-3xl font-bold text-[#3d2c1e] mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#fffaf5] p-6 rounded-2xl shadow border border-[#e8d8c4]">
          <h2 className="text-lg font-semibold">
            Total Donations
          </h2>
          <p className="text-3xl font-bold mt-2 text-[#5c3b22]">
            {stats.total}
          </p>
        </div>

        <div className="bg-[#fffaf5] p-6 rounded-2xl shadow border border-[#e8d8c4]">
          <h2 className="text-lg font-semibold">
            Available
          </h2>
          <p className="text-3xl font-bold mt-2 text-[#5c3b22]">
            {stats.available}
          </p>
        </div>

        <div className="bg-[#fffaf5] p-6 rounded-2xl shadow border border-[#e8d8c4]">
          <h2 className="text-lg font-semibold">
            Accepted
          </h2>
          <p className="text-3xl font-bold mt-2 text-[#5c3b22]">
            {stats.accepted}
          </p>
        </div>

        <div className="bg-[#fffaf5] p-6 rounded-2xl shadow border border-[#e8d8c4]">
          <h2 className="text-lg font-semibold">
            Delivered
          </h2>
          <p className="text-3xl font-bold mt-2 text-[#5c3b22]">
            {stats.delivered}
          </p>
        </div>

      </div>
    </div>
  );
}