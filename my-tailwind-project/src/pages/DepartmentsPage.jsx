import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDepartments } from "../api";

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    async function loadDepartments() {
      try {
        const data = await getDepartments();
        setDepartments(data);
      } catch (error) {
        console.error("Error loading departments:", error);
      }
    }
    loadDepartments();
  }, []);

  return (
    <div>
      <h2 className="mb-6 text-center text-3xl font-bold">All Departments</h2>

      <div className="space-y-6">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className="rounded-xl border border-gray-700 bg-gray-800 p-6 text-left shadow-md"
          >
            <img
              src={dept.image_url}
              alt={dept.name}
              className="mb-4 h-48 w-full rounded-lg object-cover"
            />

            <h3 className="text-2xl font-semibold">{dept.name}</h3>
            <p className="mt-2 text-gray-300">{dept.description}</p>

            <Link
              to={`/departments/${dept.id}`}
              className="mt-4 inline-block text-blue-400 underline hover:text-blue-300"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
