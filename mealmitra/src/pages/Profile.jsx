import { useState } from "react";
export default function Profile({ setActivePage }) {
  const user = JSON.parse(
    localStorage.getItem('user')
  );
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [role, setRole] = useState(user?.role || "");

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name,
      email,
      role,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    setIsEditing(false);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      localStorage.removeItem("token");
      setActivePage("login");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-[#f8f5f1] to-[#efe6dd] py-10 px-4">
      <div className="max-w-2xl mx-auto bg-[#fffaf5] p-8 rounded-2xl shadow-md border border-[#e8d8c4]">
        <h1 className="text-3xl font-bold text-[#5c3b22] mb-6">
          Profile
        </h1>

        <p className="mb-3">
          <span className="font-semibold">Name:</span>{" "}

          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded px-2 py-1"
            />
          ) : (
            name
          )}
        </p>

        <p className="mb-3">
          <span className="font-semibold">Email:</span>{" "}
          {isEditing ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded px-2 py-1"
            />
          ) : (
            email
          )}
        </p>

        <p className="mb-3">
          <span className="font-semibold">Role:</span>{" "}
          {isEditing ? (
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border rounded px-2 py-1"
            />
          ) : (
            role
          )}
        </p>

        <button
          onClick={() => {
            if (isEditing) {
              handleSave();
            } else {
              setIsEditing(true);
            }
          }}
          className="mt-4 border border-[#5c3b22]  text-[#5c3b22] px-3 py-1 rounded-md text-sm hover:bg-[#f8f5f1]"
        >
          {isEditing ? "Save" : "Edit Profile"}
        </button>

        <button
          onClick={handleLogout}
          className="mt-3 ml-3 border border-red-500 text-red-500 px-3 py-1 rounded-md text-sm hover:bg-red-50"
        >
          Logout
        </button>
      </div>
    </div>
  );
}