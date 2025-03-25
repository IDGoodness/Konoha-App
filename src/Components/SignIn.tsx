import { useState } from "react";
import { signIn } from "../authService";
import { Link } from "react-router-dom";



const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      setMessage("Signed in successfully!");
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
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
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          {message && <p className="mt-3 text-sm text-red-500 text-center">{message}</p>}
          <p className="mt-4 text-center text-base">
            Don't have an account? <Link to="/signup" className="text-kOrange hover:underline">Sign up</Link>
          </p>
          <p className="mt-2 text-center text-base">
            Forgot your password? <Link to="/reset" className="text-kOrange hover:underline">Reset it here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;