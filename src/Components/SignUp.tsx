import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signUp } from "../authService";



const SignUp = () => {
  // const [ displayName, setDisplayName ] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      // await signUp(email, password, displayName);
      await signUp(email, password);
      navigate("/signin"); // Redirect to sign-in page after successful sign-up
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-20">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        {/* <input className="w-full p-3 border rounded-lg mb-3" type="text" placeholder="Display Name" value={displayName} onChange={(e) => setDisplayName(e.target.value) } /> */}
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
          onClick={handleSignUp}
        >
          Sign Up
        </button>
        {message && <p className="mt-3 text-sm text-red-500 text-center">{message}</p>}
        
        {/* Sign-in link added back */}
        <p className="mt-4 text-center text-lg">
          Already have an account?{" "}
          <Link to="/signin" className="text-kOrange hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;