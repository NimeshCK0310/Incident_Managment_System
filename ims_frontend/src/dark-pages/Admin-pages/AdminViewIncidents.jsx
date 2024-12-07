import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  Edit,
} from "react-feather";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const AdminViewIncidents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const customers = [
    {
      userId: "1",  
      referenceNo: "REF563",
      name: "John Doe",
      contact: "+1234567890",
      email: "johndoe@example.com",
      incidentTitle: "Sim Activation",
      description: "Sim card activation issue.",
      postalCode: "12313",
      progress: "Complete",
      employeeName: "N/A",
      department: "N/A",
    },
    {
      userId: "2", 
      referenceNo: "REF503",
      name: "Alice Brown",
      contact: "+0987654321",
      email: "alice@example.com",
      incidentTitle: "Faulty Sim",
      description: "Faulty sim replacement.",
      postalCode: "11113",
      progress: "Assigned",
      employeeName: "Jane Smith",
      department: "Tech Support",
    },
    {
      userId: "3", 
      referenceNo: "REF561",
      name: "Bob Green",
      contact: "+1122334455",
      email: "bob@example.com",
      incidentTitle: "Network Issue",
      description: "Sim not receiving network.",
      postalCode: "12563",
      progress: "Pending",
      employeeName: "N/A",
      department: "N/A",
    },
  ];

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.referenceNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filteredCustomers.length / entriesPerPage));
  const displayedCustomers = filteredCustomers.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const goToFirstPage = () => setCurrentPage(1);
  const goToPreviousPage = () => setCurrentPage((prev) => Math.max(1, prev - 1));
  const goToNextPage = () => setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  const goToLastPage = () => setCurrentPage(totalPages);

  const handleEditClick = (userId) => {
    navigate(`/admin-assign-incidents/${userId}`);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <AdminSidebar />
      <div className="flex-grow flex flex-col overflow-auto ml-20">
        <AdminNavbar />
        <main className="p-4 flex-grow bg-gray-900 flex flex-col">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
            <select
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:ring-2 focus:ring-gray-600"
            >
              <option value={5}>5 entries</option>
              <option value={10}>10 entries</option>
              <option value={20}>20 entries</option>
            </select>
            <input
              type="text"
              placeholder="Search by name or reference no."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-60 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-700">
              <thead className="bg-gray-800">
                <tr>
                  {[
                    "Reference No",
                    "Customer Name",
                    "Customer Tel. No",
                    "Customer Email",
                    "Incident Title",
                    "Incident Description",
                    "Postal Code",
                    "Employee Name",
                    "Department",
                    "Progress",
                    "Action",
                  ].map((header) => (
                    <th
                      key={header}
                      className="px-4 py-2 border-b text-green-500 border-gray-700 text-left"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {displayedCustomers.length > 0 ? (
                  displayedCustomers.map((customer) => (
                    <tr key={customer.userId} className="hover:bg-gray-700">
                      <td className="px-4 py-2 border-b border-gray-700">{customer.referenceNo}</td>
                      <td className="px-4 py-2 border-b border-gray-700">{customer.name}</td>
                      <td className="px-4 py-2 border-b border-gray-700">{customer.contact}</td>
                      <td className="px-4 py-2 border-b border-gray-700">{customer.email}</td>
                      <td className="px-4 py-2 border-b border-gray-700">{customer.incidentTitle}</td>
                      <td className="px-4 py-2 border-b border-gray-700">{customer.description}</td>
                      <td className="px-4 py-2 border-b border-gray-700">{customer.postalCode}</td>
                      <td className="px-4 py-2 border-b border-gray-700">{customer.employeeName}</td>
                      <td className="px-4 py-2 border-b border-gray-700">{customer.department}</td>
                      <td className="px-4 py-2 border-b border-gray-700">{customer.progress}</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => handleEditClick(customer.userId)} // Use userId here
                          className="text-blue-500 hover:underline flex items-center"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={11} className="text-center py-4 text-gray-400">
                      No matching incidents found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm">
              Showing {displayedCustomers.length} of {filteredCustomers.length} entries
            </span>
            <div className="flex space-x-2">
              {[
                { label: <ChevronsLeft size={16} />, onClick: goToFirstPage, disabled: currentPage === 1 },
                { label: <ChevronLeft size={16} />, onClick: goToPreviousPage, disabled: currentPage === 1 },
                { label: <ChevronRight size={16} />, onClick: goToNextPage, disabled: currentPage === totalPages },
                { label: <ChevronsRight size={16} />, onClick: goToLastPage, disabled: currentPage === totalPages },
              ].map(({ label, onClick, disabled }) => (
                <button
                  key={label}  
                  onClick={onClick}
                  disabled={disabled}
                  className={`border p-2 rounded ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminViewIncidents;

