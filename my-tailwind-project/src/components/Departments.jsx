import { useEffect, useState } from "react";

export default function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/departments")
      .then((res) => res.json())
      .then((data) => setDepartments(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Departments</h2>

      {departments.map((dept) => (
        <div key={dept.id} className="p-4 border mb-2 rounded">
          {dept.name}
        </div>
      ))}
    </div>
  );
}
