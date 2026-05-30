import axios from 'axios';
export default function DonationCard({ item }) {
  const user = JSON.parse(localStorage.getItem('user'));
  const handleAccept = async () => {
    const confirmed = window.confirm(
      'Are you sure you want to pick up this donation?'
    );
    if (!confirmed) {
      return;
    }
    try {
      await axios.put(
        `http://localhost:5000/api/donations/${item._id}/accept`,
        {
          acceptedBy: user.name,
          acceptedByEmail: user.email,
        }
      );
      window.location.reload();

    } catch (error) {
      console.log(error);
    }
  };

  const handleDeliver = async () => {
  try {
    await axios.put(
      `http://localhost:5000/api/donations/${item._id}/deliver`
    );

    alert('Donation delivered successfully!');
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      {item.image && (
        <img
          src={item.image}
          alt="Food"
          className="w-full max-h-56 object-contain rounded-xl mb-4 bg-gray-100"
        />
      )}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-[#3d2c1e]">
          {item.donor}
        </h3>

        <span className="text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full">
          {item.status || 'Available'}
        </span>
      </div>

      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-medium">Food:</span> {item.food}
        </p>

        <p>
          <span className="font-medium">Quantity:</span> {item.quantity}
        </p>

        <p>
          <span className="font-medium">Type:</span> {item.type}
        </p>

        <p>
          <span className="font-medium">Time:</span> {item.time}
        </p>

        <p>
          <span className="font-medium">Location:</span> {item.location}
        </p>

        <button
          onClick={() =>
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.location)}`
            )
          }
          className="text-sm underline mt-1"
        >
          📍 Open in Google Maps
        </button>
      </div>

      {(item.status || 'Available') === 'Available' && (user.role === 'NGO / Volunteer') && item.donor !== user.name && (
        <button
          onClick={handleAccept}
          className="mt-4 ml-auto block px-4 py-2 rounded-lg bg-[#5c3b22] text-white text-sm"
        >
          Accept
        </button>
      )}

      {item.status === 'Accepted' && user.role === 'NGO / Volunteer' && item.acceptedBy === user.name && (
          <button
            onClick={handleDeliver}
            className="mt-4 ml-auto block px-4 py-2 rounded-lg bg-[#5c3b22] text-white text-sm"
          >
            Mark Delivered
          </button>
        )}
      
      </div>
  );
}