import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DepartmentsPage from "./pages/DepartmentsPage";
import DepartmentDetails from "./pages/DepartmentDetails";
import FacultyPage from "./pages/FacultyPage";
import FacultyDetails from "./pages/FacultyDetails";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-gray-950 text-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-10">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold md:text-5xl">
              University Dashboard
            </h1>
            <p className="mt-3 text-gray-400">
              Browse departments and faculty information
            </p>
          </header>

          <nav className="mb-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="rounded-full border border-gray-700 px-5 py-2 hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              to="/departments"
              className="rounded-full border border-gray-700 px-5 py-2 hover:bg-gray-800"
            >
              Departments
            </Link>
            <Link
              to="/faculty"
              className="rounded-full border border-gray-700 px-5 py-2 hover:bg-gray-800"
            >
              Faculty
            </Link>
            <Link
              to="/login"
              className="rounded-full border border-gray-700 px-5 py-2 hover:bg-gray-800"
            >
              Admin Login
            </Link>
            <Link
              to="/register"
              className="rounded-full border border-gray-700 px-5 py-2 hover:bg-gray-800"
            >
              Register
            </Link>
          </nav>

          <main className="w-full rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-lg">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/departments" element={<DepartmentsPage />} />
              <Route path="/departments/:id" element={<DepartmentDetails />} />
              <Route path="/faculty" element={<FacultyPage />} />
              <Route path="/faculty/:id" element={<FacultyDetails />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
