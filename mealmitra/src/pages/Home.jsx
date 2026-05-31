import DonationCard from '../components/DonationCard';
import donations from '../data/donations';

export default function Home({ setActivePage }) {
  return (
    <div className="min-h-screen bg-[#f8f5f1] flex flex-col items-center justify-center px-6">

      <h1 className="text-6xl font-bold text-[#3d2c1e] mb-4">
        🍱 MealMitra
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

      <div className="grid md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Food Saved</h3>
          <p className="text-3xl font-bold">120+</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Donations</h3>
          <p className="text-3xl font-bold">50+</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Volunteers</h3>
          <p className="text-3xl font-bold">20+</p>
        </div>
      </div>

    </div>
  );
}