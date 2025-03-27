import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signIn } from "../authService";



const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      navigate("/"); // Redirect to home page after successful sign-in
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-20">
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
          className="w-full bg-kOrange hover:bg-orange-500 text-white p-3 rounded-lg font-semibold"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        {message && <p className="mt-3 text-sm text-red-500 text-center">{message}</p>}
        <p className="mt-4 text-center text-lg">
          Don't have an account?{" "}
          <Link to="/signup" className="text-kOrange hover:underline">
            Sign Up
          </Link>
        </p>
        <p className="mt-4 text-center text-lg">
          Forgot Password?{" "}
          <Link to="/reset" className="text-kOrange hover:underline">
            Reset Password
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;