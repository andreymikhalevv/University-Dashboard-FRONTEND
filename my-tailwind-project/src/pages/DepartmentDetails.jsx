import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDepartment } from "../api";

export default function DepartmentDetails() {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDepartment() {
      try {
        const data = await getDepartment(id);
        setDepartment(data);
      } catch (error) {
        console.error("Error loading department:", error);
        setDepartment(null);
      } finally {
        setLoading(false);
      }
    }

    loadDepartment();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!department) return <p>Department not found.</p>;

  return (
    <div className="rounded-xl border border-gray-700 bg-gray-800 p-6 text-left shadow-md">
      <img
        src={department.image_url}
        alt={department.name}
        className="mb-4 h-56 w-full rounded-lg object-cover"
      />
      <h2 className="text-3xl font-bold">{department.name}</h2>
      <p className="mt-3 text-gray-300">{department.description}</p>
      <p className="mt-3 text-gray-400">Email: {department.email}</p>
      <p className="text-gray-400">Phone: {department.phone}</p>
      <p className="text-gray-400">Office: {department.office_location}</p>
    </div>
  );
}
