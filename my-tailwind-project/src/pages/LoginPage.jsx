import { useState } from "react";
import { loginAdmin } from "../api";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const result = await loginAdmin(form.email, form.password);

      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      navigate("/admin");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="mx-auto max-w-md rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-md">
      <h2 className="mb-6 text-center text-3xl font-bold">Admin Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Admin email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-lg bg-gray-900 p-3 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full rounded-lg bg-gray-900 p-3 text-white outline-none"
        />

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold hover:bg-blue-500"
        >
          Log In
        </button>
        <p className="mt-4 text-center text-sm text-gray-400">
          Need an account?{" "}
          <Link to="/register" className="text-blue-400 hover:text-blue-300">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
