import DonationForm from '../components/DonationForm';
import DonationCard from '../components/DonationCard';
import donations from '../data/donations';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f5f1] py-10 px-4">
      {/* Heading */}
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-[#3d2c1e] mb-2">
          MealMitra
        </h1>

        <p className="text-gray-600">
          Share surplus food with NGOs and volunteers nearby.
        </p>
      </div>

      {/* Donation Form */}
      <div className="max-w-3xl mx-auto mb-12">
        <DonationForm />
      </div>
    </div>
  );
}