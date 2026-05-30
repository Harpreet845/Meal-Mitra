import { useEffect, useState } from 'react';
import axios from 'axios';
import DonationCard from '../components/DonationCard';

export default function Donations() {
  const [donations, setDonations] = useState([]);
  const [filter, setFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/donations'
      );

      setDonations(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredDonations = donations.filter((item) =>
    item.food.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8f5f1] py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#3d2c1e] mb-8">
          Total Donations
        </h1>

        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full max-w-md"
        />

        <div className="flex gap-4 mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded-lg px-4 py-2 bg-white"
          >
            <option value="All">All Donations</option>
            <option value="Available">Available</option>
            <option value="Picked">Picked</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="border rounded-lg px-4 py-2 bg-white"
          >
            <option value="All">All Types</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </div>

        {donations.length === 0 ? (
          <p className="text-gray-600">
            No donations available right now.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {donations
              .filter((item) => {
                const statusMatch =
                  filter === 'All' ||
                  (item.status || 'Available') === filter;

                const typeMatch =
                  typeFilter === 'All' ||
                  item.type === typeFilter;

                const searchMatch =
                  item.food.toLowerCase().includes(search.toLowerCase());

                return statusMatch && typeMatch && searchMatch;
              })
              .map((item) => (
              <DonationCard
                key={item._id}
                item={item}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}