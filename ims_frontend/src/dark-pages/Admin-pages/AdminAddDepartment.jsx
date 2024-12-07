import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const AdminAddDepartment = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <AdminSidebar />
      <div className="flex-grow flex flex-col overflow-auto ml-20">
        <AdminNavbar />
        <main className="p-4 flex-grow bg-gray-900">
          <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-6">Add Department</h1>
            <form>
              {/* Department Name */}
              <div className="mb-4">
                <label
                  htmlFor="departmentName"
                  className="block text-sm font-medium mb-2"
                >
                  Department Name
                </label>
                <input
                  type="text"
                  id="departmentName"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter department name"
                />
              </div>
              {/* Department Email */}
              <div className="mb-4">
                <label
                  htmlFor="departmentEmail"
                  className="block text-sm font-medium mb-2"
                >
                  Department Email
                </label>
                <input
                  type="email"
                  id="departmentEmail"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter department email"
                />
              </div>
              {/* Department Contact No */}
              <div className="mb-4">
                <label
                  htmlFor="departmentContact"
                  className="block text-sm font-medium mb-2"
                >
                  Department Contact No
                </label>
                <input
                  type="text"
                  id="departmentContact"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter department contact number"
                />
              </div>
              {/* Department General Manager */}
              <div className="mb-4">
                <label
                  htmlFor="departmentManager"
                  className="block text-sm font-medium mb-2"
                >
                  Department General Manager
                </label>
                <input
                  type="text"
                  id="departmentManager"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter department general manager name"
                />
              </div>
              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium"
                >
                  Add Department
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminAddDepartment;
