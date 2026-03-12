import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFacultyMember } from "../api";

export default function FacultyDetails() {
  const { id } = useParams();
  const [facultyMember, setFacultyMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFacultyMember() {
      try {
        const data = await getFacultyMember(id);
        setFacultyMember(data);
      } catch (error) {
        console.error("Error loading faculty member:", error);
        setFacultyMember(null);
      } finally {
        setLoading(false);
      }
    }

    loadFacultyMember();
  }, [id]);

  if (loading) {
    return (
      <p className="text-center text-gray-300">Loading faculty member...</p>
    );
  }

  if (!facultyMember) {
    return (
      <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 text-center">
        <p className="text-gray-300">Faculty member not found.</p>
        <Link
          to="/faculty"
          className="mt-4 inline-block text-blue-400 underline hover:text-blue-300"
        >
          Back to Faculty
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-lg">
      <div className="flex items-start gap-10">
        <div className="aspect-square w-1/4 overflow-hidden rounded-xl border border-gray-700">
          <img
            src={
              facultyMember.profile_image_url ||
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            }
            alt={facultyMember.name}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e";
            }}
          />
        </div>

        <div className="flex-1 text-left">
          <p className="mb-2 text-sm uppercase tracking-wider text-blue-400">
            Faculty
          </p>

          <h2 className="text-4xl font-bold text-white">
            {facultyMember.name}
          </h2>

          <p className="mt-2 text-xl text-gray-400">
            {facultyMember.title || "Professor"}
          </p>

          <p className="mt-6 text-lg leading-7 text-gray-300">
            {facultyMember.bio}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-gray-800 p-4">
              <p className="text-sm text-gray-400">Email</p>
              <p className="mt-1 break-words text-white">
                {facultyMember.email || "N/A"}
              </p>
            </div>

            <div className="rounded-xl bg-gray-800 p-4">
              <p className="text-sm text-gray-400">Phone</p>
              <p className="mt-1 break-words text-white">
                {facultyMember.phone || "N/A"}
              </p>
            </div>

            <div className="rounded-xl bg-gray-800 p-4">
              <p className="text-sm text-gray-400">Department ID</p>
              <p className="mt-1 break-words text-white">
                {facultyMember.department_id || "N/A"}
              </p>
            </div>
          </div>

          <Link
            to="/faculty"
            className="mt-8 inline-block rounded-full border border-gray-700 px-5 py-2 text-white hover:bg-gray-800"
          >
            Back to Faculty
          </Link>
        </div>
      </div>
    </div>
  );
}
