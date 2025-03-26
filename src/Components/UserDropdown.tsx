import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import { updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage();

const UserDropdown = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleUpdateProfile = async () => {
    if (user) {
      try {
        let photoURL = user.photoURL;
        if (photoFile) {
          const storageRef = ref(storage, `profilePictures/${user.uid}`);
          await uploadBytes(storageRef, photoFile);
          photoURL = await getDownloadURL(storageRef);
        }
        await updateProfile(auth.currentUser!, {
          displayName,
          photoURL,
        });

        // Force UI update by reloading user info
        window.location.reload(); // Quick solution for now
      } catch (error: any) {
        setMessage(error.message);
      }
    }
  };

  return (
    <div className="relative z-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-gray-200 p-2 rounded-lg"
      >
        <img
          src={user?.photoURL || "https://via.placeholder.com/40"}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <span>{user?.displayName || "User"}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-lg p-4">
          <p className="text-sm text-gray-600">{user?.email}</p>
          <input
            type="text"
            placeholder="New Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full p-2 border rounded mt-2"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
            className="w-full p-2 border rounded mt-2"
          />
          <button
            onClick={handleUpdateProfile}
            className="w-full bg-kOrange hover:bg-amber-800 text-white p-2 rounded mt-2"
          >
            Update Profile
          </button>
          <button onClick={logout} className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded mt-2" >Log Out</button>
          {message && <p className="text-xs text-green-600 mt-2">{message}</p>}
        </div>
      )}
    </div>
  );
};

export default UserDropdown;