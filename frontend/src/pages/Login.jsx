import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (res.data.success) {
        navigate("/dashboard"); // redirect
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="h-screen bg-red-400 flex justify-center items-center">
      <form onSubmit={handleLogin} className="bg-black/80 p-8 rounded w-96 text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 bg-black rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-3 bg-black rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-red-700 p-3 rounded font-bold mt-3 hover:bg-blue-500">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;