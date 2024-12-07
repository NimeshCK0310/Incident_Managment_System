import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const AdminAddEmployee = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <AdminSidebar />
      <div className="flex-grow flex flex-col overflow-auto ml-20">
        <AdminNavbar />
        <main className="p-4 flex-grow bg-gray-900">
          <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-6">Add Employee</h1>
            <form>
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
