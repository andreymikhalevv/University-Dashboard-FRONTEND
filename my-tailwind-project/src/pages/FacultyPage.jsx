import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFaculty } from "../api";

export default function FacultyPage() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    async function loadFaculty() {
      const data = await getFaculty();
      setFaculty(data);
    }
    loadFaculty();
  }, []);

  return (
    <div>
      <h2 className="mb-8 text-center text-3xl font-bold">Faculty</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {faculty.map((member) => (
          <div
            key={member.id}
            className="aspect-square rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-md flex flex-col"
          >
            <img
              src={member.profile_image_url}
              alt={member.name}
              className="aspect-square w-full object-cover rounded-lg mb-3"
            />

            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-400 text-sm mb-2">{member.title}</p>

            <Link
              to={`/faculty/${member.id}`}
              className="mt-auto text-blue-400 underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
