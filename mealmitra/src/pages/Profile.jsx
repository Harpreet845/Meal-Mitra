export default function Profile() {
  const user = JSON.parse(
    localStorage.getItem('user')
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow p-6">
        <h1 className="text-3xl font-bold text-[#5c3b22] mb-6">
          Profile
        </h1>

        <p className="mb-3">
          <span className="font-semibold">Name:</span>{" "}
          {user?.name}
        </p>

        <p className="mb-3">
          <span className="font-semibold">Email:</span>{" "}
          {user?.email}
        </p>

        <p className="mb-3">
          <span className="font-semibold">Role:</span>{" "}
          {user?.role}
        </p>
      </div>
    </div>
  );
}