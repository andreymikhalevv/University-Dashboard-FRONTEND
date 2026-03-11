const BASE_URL = "http://localhost:3000/api";

function getAuthHeaders() {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function registerUser(email, password) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Registration failed");
  }

  return result;
}

export async function loginAdmin(email, password) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Login failed");
  }

  return result;
}

export async function getDepartments() {
  const response = await fetch(`${BASE_URL}/departments`);
  if (!response.ok) throw new Error("Failed to fetch departments");
  return response.json();
}

export async function getDepartment(id) {
  const response = await fetch(`${BASE_URL}/departments/${id}`);
  if (!response.ok) throw new Error("Failed to fetch department");
  return response.json();
}

export async function getFaculty() {
  const response = await fetch(`${BASE_URL}/faculty`);
  if (!response.ok) throw new Error("Failed to fetch faculty");
  return response.json();
}

export async function getFacultyMember(id) {
  const response = await fetch(`${BASE_URL}/faculty/${id}`);
  if (!response.ok) throw new Error("Failed to fetch faculty member");
  return response.json();
}

export async function createDepartment(departmentData) {
  const response = await fetch(`${BASE_URL}/departments`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(departmentData),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error || "Failed to create department");
  }

  return result;
}

export async function updateDepartment(id, departmentData) {
  const response = await fetch(`${BASE_URL}/departments/${id}`, {
    method: "PATCH",
    headers: getAuthHeaders(),
    body: JSON.stringify(departmentData),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error || "Failed to update department");
  }

  return result;
}

export async function deleteDepartment(id) {
  const response = await fetch(`${BASE_URL}/departments/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error || "Failed to delete department");
  }

  return result;
}

export async function createFaculty(facultyData) {
  const response = await fetch(`${BASE_URL}/faculty`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(facultyData),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error || "Failed to create faculty");
  }

  return result;
}

export async function updateFaculty(id, facultyData) {
  const response = await fetch(`${BASE_URL}/faculty/${id}`, {
    method: "PATCH",
    headers: getAuthHeaders(),
    body: JSON.stringify(facultyData),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error || "Failed to update faculty");
  }

  return result;
}

export async function deleteFaculty(id) {
  const response = await fetch(`${BASE_URL}/faculty/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error || "Failed to delete faculty");
  }

  return result;
}
