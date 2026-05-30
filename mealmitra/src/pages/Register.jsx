import { useState } from 'react';
import axios from 'axios';

export default function Register({ setActivePage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/register',
        formData
      );

      alert(response.data.message);
      setActivePage('login');

      setFormData({
        name: '',
        email: '',
        password: '',
        role: '',
      });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f7f4ef]">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-[#3d2c1e] mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none"
            required
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none bg-white"
            required
          >
            <option value="">Select User Type</option>
            <option>Restaurant / Hotel</option>
            <option>NGO / Volunteer</option>
            <option>Event Organizer</option>
            <option>Other</option>
          </select>

          <button className="w-full py-3 rounded-lg bg-[#5c3b22] text-white font-medium hover:opacity-90">
            Create Account
          </button>

          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <span
              className="text-brown-600 font-semibold cursor-pointer"
              onClick={() => setActivePage('login')}
            >
              Login
            </span>
          </p>

        </form>
      </div>
    </section>
  );
}