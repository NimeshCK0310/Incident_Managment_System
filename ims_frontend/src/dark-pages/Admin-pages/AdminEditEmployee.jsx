import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import { FaArrowLeft } from "react-icons/fa"; 

const AdminEditEmployee = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [employee, setEmployee] = useState({
    name: "",
    nic: "",
    contactNo: "",
    email: "",
    address: "",
    department: "",
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`/api/employees/${id}`);
        const data = await response.json();
        setEmployee({
          name: data.name,
          nic: data.nic,
          contactNo: data.contactNo,
          email: data.email,
          address: data.address,
          department: data.department,
        });
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/employees/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      });

      if (response.ok) {
        navigate("/admin-employee-list"); 
      } else {
        console.error("Failed to update employee");
      }
    } catch (error) {
      console.error("Error updating employee:", error);
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
            <h2 className="text-2xl font-semibold">Edit Employee</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-4xl mx-auto">
            {/* Employee Name */}
            <div className="form-group">
              <label htmlFor="name" className="block">Employee Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={employee.name}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                required
              />
            </div>

            {/* Employee NIC */}
            <div className="form-group">
              <label htmlFor="nic" className="block">Employee NIC</label>
              <input
                type="text"
                id="nic"
                name="nic"
                value={employee.nic}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                required
              />
            </div>

            {/* Employee Contact No */}
            <div className="form-group">
              <label htmlFor="contactNo" className="block">Employee Contact No</label>
              <input
                type="text"
                id="contactNo"
                name="contactNo"
                value={employee.contactNo}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                required
              />
            </div>

            {/* Employee Email */}
            <div className="form-group">
              <label htmlFor="email" className="block">Employee Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={employee.email}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                required
              />
            </div>

            {/* Employee Address */}
            <div className="form-group">
              <label htmlFor="address" className="block">Employee Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={employee.address}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                required
              />
            </div>

            {/* Employee Department */}
            <div className="form-group">
              <label htmlFor="department" className="block">Department</label>
              <input
                type="text"
                id="department"
                name="department"
                value={employee.department}
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

export default AdminEditEmployee;
