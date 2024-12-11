import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import { FaArrowLeft } from "react-icons/fa"; 

const AdminEditDepartment = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [department, setDepartment] = useState({
    name: "",
    email: "",
    contactNo: "",
    generalManager: "",
  });

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const response = await fetch(`/api/departments/${id}`);
        const data = await response.json();
        setDepartment({
          name: data.name,
          email: data.email,
          contactNo: data.contactNo,
          generalManager: data.generalManager,
        });
      } catch (error) {
        console.error("Error fetching department:", error);
      }
    };

    fetchDepartment();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDepartment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/departments/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(department),
      });

      if (response.ok) {
        navigate("/admin-department-list"); 
      } else {
        console.error("Failed to update department");
      }
    } catch (error) {
      console.error("Error updating department:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <AdminSidebar />
      <div className="flex-grow flex flex-col overflow-auto ml-20">
        <AdminNavbar />
        <main className="p-4 flex-grow bg-gray-900">
          <div className="flex items-center mb-4">
            <button
              onClick={() => navigate(-1)} 
              className="mr-4 text-white"
            >
              <FaArrowLeft /> 
            </button>
            <h2 className="text-2xl font-semibold">Edit Department</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-4xl mx-auto">
            {/* Department Name */}
            <div className="form-group">
              <label htmlFor="name" className="block">Department Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={department.name}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                required
              />
            </div>

            {/* Department Email */}
            <div className="form-group">
              <label htmlFor="email" className="block">Department Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={department.email}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                required
              />
            </div>

            {/* Department Contact No */}
            <div className="form-group">
              <label htmlFor="contactNo" className="block">Department Contact No</label>
              <input
                type="text"
                id="contactNo"
                name="contactNo"
                value={department.contactNo}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                required
              />
            </div>

            {/* Department General Manager */}
            <div className="form-group">
              <label htmlFor="generalManager" className="block">Department General Manager</label>
              <input
                type="text"
                id="generalManager"
                name="generalManager"
                value={department.generalManager}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-group mt-4 text-right">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AdminEditDepartment;
