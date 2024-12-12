import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight, Trash2, Edit, Plus } from "react-feather";

const AdminEmployeeList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [employees, setEmployees] = useState([]); // State for employee data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const navigate = useNavigate();

  // Fetch employees from the backend when the component mounts
  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await fetch("REACT_APP_BASE_URLapi/employees");
        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }
        const data = await response.json();
        setEmployees(data); // Set fetched data into state
      } catch (error) {
        setError(error.message); // Set error message if fetching fails
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false); // Stop loading once the fetch is done
      }
    };

    fetchEmployees();
  }, []);

  // Filter employees based on the search query
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalEntries = filteredEmployees.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const displayedEmployees = filteredEmployees.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const goToFirstPage = () => setCurrentPage(1);
  const goToPreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToLastPage = () => setCurrentPage(totalPages);

  const handleDeleteClick = (id) => {
    setEmployeeToDelete(id);
    setShowDeleteModal(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setEmployeeToDelete(null);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await fetch(`REACT_APP_BASE_URL/api/employees/${employeeToDelete}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete employee");
      }
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== employeeToDelete)
      ); // Update state after deletion
      setShowDeleteModal(false);
      setEmployeeToDelete(null);
    } catch (error) {
      console.error(error);
      alert("There was an error deleting the employee.");
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin-edit-employee/${id}`);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <AdminSidebar />
      <div className="flex-grow flex flex-col overflow-auto ml-20">
        <AdminNavbar />
        <main className="mt-10 p-4 flex-grow bg-gray-900">
          <div className="flex justify-end mb-6">
            <Link to="/admin-add-employee">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Add New Employee</span>
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

          {loading ? (
            <div className="text-center text-white">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500">Error: {error}</div>
          ) : (
            <>
              <div className="overflow-x-auto bg-gray-800 p-4 rounded-lg shadow-md mb-6">
                <table className="min-w-full table-auto text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="px-4 py-2 text-green-500">Name</th>
                      <th className="px-4 py-2 text-green-500">Email</th>
                      <th className="px-4 py-2 text-green-500">Tel. No</th>
                      <th className="px-4 py-2 text-green-500">Department</th>
                      <th className="px-4 py-2 text-green-500">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedEmployees.map((employee) => (
                      <tr key={employee.id} className="border-b border-gray-700 hover:bg-gray-700">
                        <td className="px-4 py-2">{employee.name}</td>
                        <td className="px-4 py-2">{employee.email}</td>
                        <td className="px-4 py-2">{employee.phone}</td>
                        <td className="px-4 py-2">{employee.department}</td>
                        <td className="px-4 py-2 flex space-x-2">
                          <button onClick={() => handleEdit(employee.id)} className="text-blue-500">
                            <Edit className="h-5 w-5" />
                          </button>
                          <button onClick={() => handleDeleteClick(employee.id)} className="text-red-500">
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
                  Showing {displayedEmployees.length} of {totalEntries} entries
                </div>
                <div className="flex space-x-2">
                  <button onClick={goToFirstPage} disabled={currentPage === 1} className="border p-2 rounded">
                    <ChevronsLeft className="h-4 w-4" />
                  </button>
                  <button onClick={goToPreviousPage} disabled={currentPage === 1} className="border p-2 rounded">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="p-2">{currentPage} of {totalPages}</span>
                  <button onClick={goToNextPage} disabled={currentPage === totalPages} className="border p-2 rounded">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button onClick={goToLastPage} disabled={currentPage === totalPages} className="border p-2 rounded">
                    <ChevronsRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </main>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">Are you sure you want to delete this employee?</p>
            <div className="flex justify-end space-x-2">
              <button onClick={handleCancelDelete} className="bg-gray-700 px-4 py-2 rounded-lg">
                Cancel
              </button>
              <button onClick={handleConfirmDelete} className="bg-red-500 px-4 py-2 rounded-lg">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEmployeeList;
