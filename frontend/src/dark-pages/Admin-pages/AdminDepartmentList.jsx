import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
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

  const departments = [
    { id: "D001", name: "IT", email: "IT@gmail.com", phone: "123-456-7890" },
    { id: "D002", name: "HR", email: "HR@gmail.com", phone: "987-654-3210" },
    { id: "D003", name: "Finance", email: "Finance@gmail.com", phone: "555-123-4567" },
    { id: "D004", name: "Marketing", email: "Marketing@gmail.com", phone: "111-222-3333" },
    { id: "D005", name: "Operations", email: "Operations@gmail.com", phone: "444-555-6666" },
    { id: "D006", name: "Sales", email: "Sales@gmail.com", phone: "777-888-9999" },
    { id: "D007", name: "Support", email: "Support@gmail.com", phone: "111-333-5555" },
    { id: "D008", name: "Legal", email: "Legal@gmail.com", phone: "666-777-8888" },
  ];

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

  const handleDelete = () => {
    console.log(`Deleted department with ID: ${departmentToDelete}`);
    setShowDeleteModal(false); 
  };

  const handleEdit = (id) => {
    console.log(`Edit department with ID: ${id}`);
    navigate(`/admin-edit-department/${id}`);
  };

  const handleConfirmDelete = (id) => {
    setDepartmentToDelete(id); 
    setShowDeleteModal(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false); 
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
                    key={department.id}
                    className="border-b border-gray-700 hover:bg-gray-700"
                  >
                    <td className="px-4 py-2">{department.id}</td>
                    <td className="px-4 py-2">{department.name}</td>
                    <td className="px-4 py-2">{department.email}</td>
                    <td className="px-4 py-2">{department.phone}</td>
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
              <span className="p-2">
                {currentPage} of {totalPages}
              </span>
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

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this department?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleCancelDelete}
                className="bg-gray-600 text-white px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDepartmentList;
