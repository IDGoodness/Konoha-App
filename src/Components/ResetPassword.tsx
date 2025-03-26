import { useState } from "react";
import { resetPassword } from "../authService";
import { Link } from "react-router-dom";



const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async () => {
    try {
      await resetPassword(email);
      setMessage("Password reset email sent!");
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-16">
          <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
          <input
            className="w-full p-3 border rounded-lg mb-3"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="w-full bg-kOrange hover:bg-orange-500 text-white p-3 rounded-lg font-semibold"
            onClick={handleReset}
          >
            Send Reset Email
          </button>
          {message && <p className="mt-3 text-sm text-red-500 text-center">{message}</p>}
          <p className="mt-4 text-center text-lg">
            Remembered your password? <Link to="/signin" className="text-kOrange hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;