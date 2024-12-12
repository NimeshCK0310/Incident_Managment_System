import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const AdminAddEmployee = () => {
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeNIC: "",
    employeeContact: "",
    employeeEmail: "",
    employeeAddress: "",
    department: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form data
    const { employeeName, employeeNIC, employeeContact, employeeEmail, employeeAddress, department } = formData;
    if (!employeeName || !employeeNIC || !employeeContact || !employeeEmail || !employeeAddress || !department) {
      alert("Please fill in all required fields.");
      return;
    }
  
    // Create API payload
    const apiPayload = {
      name: employeeName,
      nic: employeeNIC,
      phone: employeeContact,
      email: employeeEmail,
      address: employeeAddress,
      department,
    };
  
    console.log("Submitting apiPayload:", apiPayload);
  
    try {
      const response = await fetch("http://localhost:5000/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiPayload),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        throw new Error(errorData.message || "Failed to add employee");
      }
  
      alert("Employee added successfully!");
      setFormData({
        employeeName: "",
        employeeNIC: "",
        employeeContact: "",
        employeeEmail: "",
        employeeAddress: "",
        department: "",
      });
    } catch (error) {
      console.error(error);
      alert(error.message || "There was an error adding the employee. Please try again.");
    }
  };
  

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <AdminSidebar />
      <div className="flex-grow flex flex-col overflow-auto ml-20">
        <AdminNavbar />
        <main className="p-4 flex-grow bg-gray-900">
          <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-6">Add Employee</h1>
            <form onSubmit={handleSubmit}>
              {/* Employee Name */}
              <div className="mb-4">
                <label
                  htmlFor="employeeName"
                  className="block text-sm font-medium mb-2"
                >
                  Employee Name
                </label>
                <input
                  type="text"
                  id="employeeName"
                  value={formData.employeeName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter employee name"
                />
              </div>
              {/* Employee NIC */}
              <div className="mb-4">
                <label
                  htmlFor="employeeNIC"
                  className="block text-sm font-medium mb-2"
                >
                  Employee NIC
                </label>
                <input
                  type="text"
                  id="employeeNIC"
                  value={formData.employeeNIC}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter employee NIC"
                />
              </div>
              {/* Employee Contact No */}
              <div className="mb-4">
                <label
                  htmlFor="employeeContact"
                  className="block text-sm font-medium mb-2"
                >
                  Employee Contact No
                </label>
                <input
                  type="text"
                  id="employeeContact"
                  value={formData.employeeContact}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter contact number"
                />
              </div>
              {/* Employee Email */}
              <div className="mb-4">
                <label
                  htmlFor="employeeEmail"
                  className="block text-sm font-medium mb-2"
                >
                  Employee Email
                </label>
                <input
                  type="email"
                  id="employeeEmail"
                  value={formData.employeeEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter employee email"
                />
              </div>
              {/* Employee Address */}
              <div className="mb-4">
                <label
                  htmlFor="employeeAddress"
                  className="block text-sm font-medium mb-2"
                >
                  Employee Address
                </label>
                <textarea
                  id="employeeAddress"
                  value={formData.employeeAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter employee address"
                  rows="3"
                ></textarea>
              </div>
              {/* Department Select Dropdown */}
              <div className="mb-4">
                <label
                  htmlFor="department"
                  className="block text-sm font-medium mb-2"
                >
                  Department
                </label>
                <select
                  id="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Department</option>
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                  <option value="Development">Development</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>
              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium"
                >
                  Add Employee
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminAddEmployee;
