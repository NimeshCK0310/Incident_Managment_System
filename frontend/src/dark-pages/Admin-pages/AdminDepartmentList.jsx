import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  Trash2,
  Edit,
  Plus,
} from "react-feather";

const AdminDepartmentList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false); 
  const [departmentToDelete, setDepartmentToDelete] = useState(null); 
  const navigate = useNavigate();

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get("REACT_APP_BASE_URL/api/departments");
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
        alert("Failed to load departments. Please try again later.");
      }
    };

    fetchDepartments();
  }, []);

  const filteredDepartments = departments.filter((department) => {
    return (
      department.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      department.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const totalEntries = filteredDepartments.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const displayedDepartments = filteredDepartments.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const goToFirstPage = () => setCurrentPage(1);
  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToLastPage = () => setCurrentPage(totalPages);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`REACT_APP_BASE_URL/api/departments/${id}`);
      fetchDepartments(); // Refresh data after deletion
    } catch (error) {
      console.error("Error deleting department:", error);
      alert("Failed to delete the department. Please try again.");
    }
  };

  const handleEdit = (departmentId) => {
    if (!departmentId) {
      console.error("Invalid department ID provided for editing.");
      return;
    }
    console.log(`Navigating to edit page for department with ID: ${departmentId}`);
    navigate(`/admin-edit-department/${departmentId}`);
  };

  const handleConfirmDelete = (departmentId) => {
    if (!departmentId) {
      console.error("Invalid department ID provided for deletion.");
      return;
    }
    console.log(`Opening delete confirmation for department with ID: ${departmentId}`);
    setDepartmentToDelete(departmentId); 
    setShowDeleteModal(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setDepartmentToDelete(null);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <AdminSidebar />
      <div className="flex-grow flex flex-col overflow-auto ml-20">
        <AdminNavbar />
        <main className="mt-10 p-4 flex-grow bg-gray-900">
          <div className="flex justify-end mb-6">
            <Link to="/admin-add-department">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Add New Department</span>
              </button>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-between mb-4 gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm">Entries per page:</span>
              <select
                value={entriesPerPage}
                onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Search...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none w-full sm:w-auto"
            />
          </div>

          <div className="overflow-x-auto bg-gray-800 p-4 rounded-lg shadow-md mb-6">
            <table className="min-w-full table-auto text-left text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-4 py-2 text-green-500">Department ID</th>
                  <th className="px-4 py-2 text-green-500">Department Name</th>
                  <th className="px-4 py-2 text-green-500">Department Email</th>
                  <th className="px-4 py-2 text-green-500">Tel. No</th>
                  <th className="px-4 py-2 text-green-500">Action</th>
                </tr>
              </thead>

              <tbody>
                {displayedDepartments.map((department) => (
                  <tr
                    key={department.id || Math.random()}
                    className="border-b border-gray-700 hover:bg-gray-700"
                  >
                    <td className="px-4 py-2">{department.id || "N/A"}</td>
                    <td className="px-4 py-2">{department.name || "N/A"}</td>
                    <td className="px-4 py-2">{department.email || "N/A"}</td>
                    <td className="px-4 py-2">{department.phone || "N/A"}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleEdit(department.id)}
                        className="text-blue-500 hover:underline mr-2"
                      >
                        <Edit className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleConfirmDelete(department.id)}
                        className="text-red-500 hover:underline"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-sm sm:text-base text-center sm:text-left">
              Showing {displayedDepartments.length} of {totalEntries} entries
            </div>

            <div className="flex space-x-2 justify-center mt-4 sm:mt-0">
              <button
                onClick={goToFirstPage}
                disabled={currentPage === 1}
                className="border border-gray-300 p-2 rounded"
              >
                <ChevronsLeft className="h-4 w-4" />
              </button>
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="border border-gray-300 p-2 rounded"
              >
                <ChevronLeft className="h-4 w-4" />
                </button>
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="border border-gray-300 p-2 rounded"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <button
                onClick={goToLastPage}
                disabled={currentPage === totalPages}
                className="border border-gray-300 p-2 rounded"
              >
                <ChevronsRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </main>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg mb-4 text-red-500">
              Are you sure you want to delete this department?
            </h2>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Yes, Delete
              </button>
              <button
                onClick={handleCancelDelete}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDepartmentList;