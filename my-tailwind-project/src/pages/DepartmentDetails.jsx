import { useParams } from "react-router-dom";

const departments = [
  { id: 1, name: "Computer Science", description: "Programming and software" },
  { id: 2, name: "Mathematics", description: "Numbers and theory" },
];

export default function DepartmentDetails() {
  const { id } = useParams();
  const department = departments.find((d) => d.id === Number(id));

  if (!department) return <p>Department not found.</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{department.name}</h2>
      <p>{department.description}</p>
    </div>
  );
}
