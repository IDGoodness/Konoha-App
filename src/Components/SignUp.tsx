import { useState } from "react";
import { signUp } from "../authService";
import { Link } from "react-router-dom";



const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      setMessage("Account created! Check your email for verification.");
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
          <input
            className="w-full p-3 border rounded-lg mb-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full p-3 border rounded-lg mb-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg font-semibold"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          {message && <p className="mt-3 text-sm text-red-500 text-center">{message}</p>}
          <p className="mt-4 text-center text-lg">
            Already have an account? <Link to="/signin" className="text-kOrange hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;