import { useEffect, useState } from "react";

export default function Faculty() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/faculty")
      .then((res) => res.json())
      .then((data) => setFaculty(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Faculty</h2>

      {faculty.map((person) => (
        <div key={person.id} className="p-4 border mb-2 rounded">
          {person.name}
        </div>
      ))}
    </div>
  );
}
