import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const UserDropdown = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-kOrange hover:bg-orange-500 p-2 px-5 text-white rounded-lg"
      >
        <span>{user?.displayName || "User"}</span>
      </button>
      {isOpen && (
        <div className="absolute -right-20 lg:right-0 mt-2 w-60 bg-white shadow-lg rounded-lg p-4">
          <p className="text-sm text-gray-600">{user?.email}</p>
          <button onClick={logout} className="w-full bg-kOrange hover:bg-orange-500 text-white p-2 rounded mt-2" >Log Out</button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;