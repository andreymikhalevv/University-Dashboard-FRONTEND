import { useParams } from "react-router-dom";

const faculty = [
  {
    id: 1,
    name: "Dr. Smith",
    email: "smith@university.edu",
    bio: "CS Professor",
  },
  {
    id: 2,
    name: "Dr. Johnson",
    email: "johnson@university.edu",
    bio: "Math Professor",
  },
];

export default function FacultyDetails() {
  const { id } = useParams();
  const professor = faculty.find((p) => p.id === Number(id));

  if (!professor) return <p>Professor not found.</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{professor.name}</h2>
      <p>Email: {professor.email}</p>
      <p>Bio: {professor.bio}</p>
    </div>
  );
}
