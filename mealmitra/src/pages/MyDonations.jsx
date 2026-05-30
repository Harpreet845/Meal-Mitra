import { useEffect, useState } from 'react';
import axios from 'axios';

const handleDelete = async (id) => {
  const confirmed = window.confirm(
    'Are you sure you want to delete this donation?'
  );

  if (!confirmed) return;

  try {
    await axios.delete(
      `https://mealmitra-backend-t9ub.onrender.com/api/donations/${id}`
    );

    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export default function MyDonations() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const response = await axios.get(
        'https://mealmitra-backend-t9ub.onrender.com/api/donations'
      );

      const user = JSON.parse(
        localStorage.getItem('user')
      );

      const myDonations = response.data.filter(
        (item) => item.donor === user.name
      );

      setDonations(myDonations);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-[#3d2c1e] text-3xl font-bold mb-6">
        My Donations
      </h1>

      {donations.length === 0 ? (
        <p>No donations found.</p>
      ) : (
        donations.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl p-4 mb-4 shadow"
          >
            <h2 className="font-bold">{item.food}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Status: {item.status}</p>
            <p>Location: {item.location}</p>
            {item.status === 'Available' && (
            <button
              onClick={() => handleDelete(item._id)}
              className="mt-3 ml-auto block px-3 py-1 bg-red-500 text-white rounded-md text-sm"
            >
              Delete
            </button>
          )}
            {item.acceptedBy && (
              <>
                <hr className="my-3" />

                <h3 className="font-semibold mb-2">
                  👤 Receiver Details
                </h3>

                <p>Accepted By: {item.acceptedBy}</p>
                <p>Email: {item.acceptedByEmail}</p>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}