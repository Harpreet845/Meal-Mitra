import { useState } from 'react';
import axios from 'axios';

export default function DonationForm() {
  const [formData, setFormData] = useState({
    donor: '',
    food: '',
    quantity: '',
    type: '',
    location: '',
    time: '',
    Image: '',
  });

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );

          if(!response.ok) {
            throw new Error("Failed to fetch location");
          }
          const data = await response.json();
          console.log("Setting location:", data.display_name);

          setFormData({
            ...formData,
            location: data.display_name,
          });
        } catch (error) {
          console.log(error);
          alert('Unable to fetch address');
        }
      },
      (error) => {
        console.log(error);
        alert('Location access denied');
      }
    );
  };

  const [preview, setPreview] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      const user = JSON.parse(localStorage.getItem('user'));
      data.append('donor', user.name);
      data.append('food', formData.food);
      data.append('quantity', formData.quantity);
      data.append('type', formData.type);
      data.append('location', formData.location);
      data.append('time', formData.time);
      data.append('image', formData.image);

      const response = await axios.post(
        'https://mealmitra-backend-t9ub.onrender.com/api/donations',
        data
      );

      console.log(response.data);

      alert('Donation submitted successfully!');

      setFormData({
        food: '',
        quantity: '',
        type: '',
        location: '',
        time: '',
      });
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="bg-[#f4eae2] rounded-2xl p-4 md:p-6 border border-[#e6d7c6] shadow-md w-full">
      <h2 className="text-2xl font-semibold mb-5 text-[#3d2c1e]">
        Donate Food
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="food"
          placeholder="Food Item"
          value={formData.food}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none"
          required
        />

        <input
          type="text"
          name="quantity"
          placeholder="Food Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none"
          required
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none bg-white"
          required
        >
          <option value="">Food Type</option>
          <option>Veg</option>
          <option>Non-Veg</option>
        </select>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            name="location"
            placeholder="Pickup Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none"
            required
          />

          <button
            type="button"
            onClick={getLocation}
            className="px-4 rounded-lg bg-[#5c3b22] text-white whitespace-nowrap"
          >
            Use Location
          </button> 
        </div>

        <input
          type="time"
          name="time"
          placeholder="Pickup Time"
          value={formData.time}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];

            if (file) {
              setFormData({
                ...formData,
                image: file,
              });

              setPreview(URL.createObjectURL(file));
            }
          }}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
        />
        {formData.image && (
          <img
            src={preview}
            alt="Food Preview"
            className="w-full max-h-56 object-contain rounded-xl bg-gray-100"
          />
        )}

        <button className="w-full py-3 rounded-lg bg-[#5c3b22] text-white font-medium hover:opacity-90">
          Submit
        </button>
      </form>
    </div>
  );
}