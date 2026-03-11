import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {
  getDepartments,
  getFaculty,
  createDepartment,
  deleteDepartment,
  createFaculty,
  deleteFaculty,
} from "../api";

export default function AdminPage() {
  const token = localStorage.getItem("token");

  const [departments, setDepartments] = useState([]);
  const [faculty, setFaculty] = useState([]);

  const [newDepartment, setNewDepartment] = useState({
    name: "",
    description: "",
    image_url: "",
    email: "",
    phone: "",
    office_location: "",
  });

  const [newFaculty, setNewFaculty] = useState({
    name: "",
    bio: "",
    profile_image_url: "",
    email: "",
    phone: "",
    title: "",
    department_id: "",
  });

  async function loadData() {
    const departmentsData = await getDepartments();
    const facultyData = await getFaculty();
    setDepartments(departmentsData);
    setFaculty(facultyData);
  }

  useEffect(() => {
    async function loadData() {
      const departmentsData = await getDepartments();
      const facultyData = await getFaculty();
      setDepartments(departmentsData);
      setFaculty(facultyData);
    }

    loadData();
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  async function handleDepartmentSubmit(e) {
    e.preventDefault();
    await createDepartment(newDepartment);
    setNewDepartment({
      name: "",
      description: "",
      image_url: "",
      email: "",
      phone: "",
      office_location: "",
    });
    loadData();
  }

  async function handleFacultySubmit(e) {
    e.preventDefault();
    await createFaculty({
      ...newFaculty,
      department_id: Number(newFaculty.department_id),
    });
    setNewFaculty({
      name: "",
      bio: "",
      profile_image_url: "",
      email: "",
      phone: "",
      title: "",
      department_id: "",
    });
    loadData();
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Admin Panel</h2>
        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-600 px-4 py-2 hover:bg-red-500"
        >
          Log Out
        </button>
      </div>

      <section className="rounded-xl border border-gray-700 bg-gray-800 p-6">
        <h3 className="mb-4 text-xl font-semibold">Add Department</h3>
        <form onSubmit={handleDepartmentSubmit} className="grid gap-3">
          <input
            className="rounded bg-gray-900 p-2"
            placeholder="Name"
            value={newDepartment.name}
            onChange={(e) =>
              setNewDepartment({ ...newDepartment, name: e.target.value })
            }
          />
          <input
            className="rounded bg-gray-900 p-2"
            placeholder="Description"
            value={newDepartment.description}
            onChange={(e) =>
              setNewDepartment({
                ...newDepartment,
                description: e.target.value,
              })
            }
          />
          <input
            className="rounded bg-gray-900 p-2"
            placeholder="Image URL"
            value={newDepartment.image_url}
            onChange={(e) =>
              setNewDepartment({ ...newDepartment, image_url: e.target.value })
            }
          />
          <input
            className="rounded bg-gray-900 p-2"
            placeholder="Email"
            value={newDepartment.email}
            onChange={(e) =>
              setNewDepartment({ ...newDepartment, email: e.target.value })
            }
          />
          <input
            className="rounded bg-gray-900 p-2"
            placeholder="Phone"
            value={newDepartment.phone}
            onChange={(e) =>
              setNewDepartment({ ...newDepartment, phone: e.target.value })
            }
          />
          <input
            className="rounded bg-gray-900 p-2"
            placeholder="Office location"
            value={newDepartment.office_location}
            onChange={(e) =>
              setNewDepartment({
                ...newDepartment,
                office_location: e.target.value,
              })
            }
          />
          <button className="rounded bg-blue-600 px-4 py-2">
            Add Department
          </button>
        </form>
      </section>

      <section className="rounded-xl border border-gray-700 bg-gray-800 p-6">
        <h3 className="mb-4 text-xl font-semibold">Departments</h3>
        <div className="space-y-3">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="flex items-center justify-between rounded bg-gray-900 p-3"
            >
              <span>{dept.name}</span>
              <button
                className="rounded bg-red-600 px-3 py-1"
                onClick={() => deleteDepartment(dept.id).then(loadData)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-gray-700 bg-gray-800 p-6">
        <h3 className="mb-4 text-xl font-semibold">Add Faculty</h3>
        <form onSubmit={handleFacultySubmit} className="grid gap-3">
          <input
            className="rounded bg-gray-900 p-2"
            placeholder="Name"
            value={newFaculty.name}
            onChange={(e) =>
              setNewFaculty({ ...newFaculty, name: e.target.value })
            }
          />
          <input
            className="rounded bg-gray-900 p-2"
            placeholder="Bio"
            value={newFaculty.bio}
            onChange={(e) =>
              setNewFaculty({ ...newFaculty, bio: e.target.value })
            }
          />
          <input
            className="rounded bg-gray-900 p-2"
            placeholder="Profile image URL"
            value={newFaculty.profile_image_url}
            onChange={(e) =>
              setNewFaculty({
                ...newFaculty,
                profile_image_url: e.target.value,
              })
            }
          />
          <input
            className="rounded bg-gray-900 p-2"
            placeholder="Email"
            value={newFaculty.email}
            onChange={(e) =>
              setNewFaculty({ ...newFaculty, email: e.target.value })
            }
          />
          <input
            className="rounded bg-gray-900 p-2"
            placeholder="Phone"
            value={newFaculty.phone}
            onChange={(e) =>
              setNewFaculty({ ...newFaculty, phone: e.target.value })
            }
          />
          <input
            className="rounded bg-gray-900 p-2"
            placeholder="Title"
            value={newFaculty.title}
            onChange={(e) =>
              setNewFaculty({ ...newFaculty, title: e.target.value })
            }
          />
          <select
            className="rounded bg-gray-900 p-2"
            value={newFaculty.department_id}
            onChange={(e) =>
              setNewFaculty({ ...newFaculty, department_id: e.target.value })
            }
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
          <button className="rounded bg-blue-600 px-4 py-2">Add Faculty</button>
        </form>
      </section>

      <section className="rounded-xl border border-gray-700 bg-gray-800 p-6">
        <h3 className="mb-4 text-xl font-semibold">Faculty</h3>
        <div className="space-y-3">
          {faculty.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between rounded bg-gray-900 p-3"
            >
              <span>{member.name}</span>
              <button
                className="rounded bg-red-600 px-3 py-1"
                onClick={() => deleteFaculty(member.id).then(loadData)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
