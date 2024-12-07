import React, { useState } from 'react';
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import UserLoginHomeNavbar from './UserLoginHomeNavbar';
import  FooterComp  from '../../components/FooterComp';

export const LoginReportedIncidentPage = () => {
  const [incidents] = useState([  
    { id: 1, referenceId: 'INC123', date: '2024-11-15', time: '10:00 AM', name: 'John Doe', contactNumber: '123-456-7890', email: 'john@example.com', incidentTitle: 'System Failure', incidentType: 'Technical', description: 'System crashed due to overload', postalCode: '12313', status: 'Pending' },
    { id: 2, referenceId: 'INC124', date: '2024-11-15', time: '10:00 AM', name: 'John Doe', contactNumber: '123-456-7890', email: 'john@example.com', incidentTitle: 'System Failure', incidentType: 'Technical', description: 'System crashed due to overload', postalCode: '33424',status: 'Assigned' },
    { id: 3, referenceId: 'INC125', date: '2024-11-15', time: '10:00 AM', name: 'John Doe', contactNumber: '123-456-7890', email: 'john@example.com', incidentTitle: 'System Failure', incidentType: 'Technical', description: 'System crashed due to overload', postalCode: '31414',status: 'Complete' },
  ]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIncidents = incidents.filter((incident) =>
    incident.referenceId.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const totalEntries = filteredIncidents.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const displayedIncidents = filteredIncidents.slice(startIndex, startIndex + entriesPerPage);

  const goToFirstPage = () => setCurrentPage(1);
  const goToPreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToLastPage = () => setCurrentPage(totalPages);

  const getStatusButtonClass = (status) => {
    if (status === 'Assigned') {
      return 'bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2';
    } else if (status === 'Complete') {
      return 'bg-green-600 hover:bg-green-700 text-white rounded-full px-4 py-2';
    }
    return 'bg-red-600 hover:bg-red-700 text-white rounded-full px-4 py-2';
  };

  return (
    <div>
      <UserLoginHomeNavbar />
      <div className="flex flex-col bg-gray-900 text-white min-h-screen pt-16">
        <main className="p-6 flex flex-col items-center">
          <div className="w-full flex justify-end mb-4 mt-6">
            <Link to="/user-login-incident">
              <button className="bg-green-600 text-white px-4 py-2 rounded-sm hover:bg-green-700">
                + Add New Incident
              </button>
            </Link>
          </div>

          <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 mt-8 space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <label htmlFor="entriesPerPage" className="text-sm sm:text-base">Entries per page:</label>
              <select
                id="entriesPerPage"
                value={entriesPerPage}
                onChange={(e) => setEntriesPerPage(parseInt(e.target.value))}
                className="border border-gray-600 bg-gray-800 text-white p-2 rounded-sm"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>

            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <label htmlFor="search" className="text-sm sm:text-base">Search:</label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-600 bg-gray-800 text-white p-2 rounded-sm w-full sm:w-64"
                placeholder="Search by Reference ID"
              />
            </div>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="min-w-full bg-gray-800 shadow-md rounded-lg border border-gray-600">
              <thead>
                <tr className="bg-gray-700 text-left">
                  <th className="p-4 border border-gray-600">Reference ID</th>
                  <th className="p-4 border border-gray-600">Date</th>
                  <th className="p-4 border border-gray-600">Time</th>
                  <th className="p-4 border border-gray-600">Name</th>
                  <th className="p-4 border border-gray-600">Contact Number</th>
                  <th className="p-4 border border-gray-600">Email</th>
                  <th className="p-4 border border-gray-600">Incident Title</th>
                  <th className="p-4 border border-gray-600">Incident Type</th>
                  <th className="p-4 border border-gray-600">Description</th>
                  <th className="p-4 border border-gray-600">Postal Code</th>
                  <th className="p-4 border border-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {displayedIncidents.map((incident) => (
                  <tr key={incident.id} className="border-t border-gray-600 hover:bg-gray-700">
                    <td className="p-4 border border-gray-600">{incident.referenceId}</td>
                    <td className="p-4 border border-gray-600">{incident.date}</td>
                    <td className="p-4 border border-gray-600">{incident.time}</td>
                    <td className="p-4 border border-gray-600">{incident.name}</td>
                    <td className="p-4 border border-gray-600">{incident.contactNumber}</td>
                    <td className="p-4 border border-gray-600">{incident.email}</td>
                    <td className="p-4 border border-gray-600">{incident.incidentTitle}</td>
                    <td className="p-4 border border-gray-600">{incident.incidentType}</td>
                    <td className="p-4 border border-gray-600">{incident.description}</td>
                    <td className="p-4 border border-gray-600">{incident.postalCode}</td>
                    <td className="p-4 border border-gray-600">
                      <Link to={`/incident-history/${incident.id}`}>
                        <button className={getStatusButtonClass(incident.status)}>
                          {incident.status}
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 w-full flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="text-sm sm:text-base text-center sm:text-left">
              Showing {displayedIncidents.length} of {totalEntries} entries
            </div>

            <div className="flex space-x-2">
              <button onClick={goToFirstPage} disabled={currentPage === 1} className="border border-gray-600 p-2 rounded-sm">
                <ChevronsLeft className="h-4 w-4" />
              </button>
              <button onClick={goToPreviousPage} disabled={currentPage === 1} className="border border-gray-600 p-2 rounded-sm">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-sm sm:text-base">{currentPage} / {totalPages}</span>
              <button onClick={goToNextPage} disabled={currentPage === totalPages} className="border border-gray-600 p-2 rounded-sm">
                <ChevronRight className="h-4 w-4" />
              </button>
              <button onClick={goToLastPage} disabled={currentPage === totalPages} className="border border-gray-600 p-2 rounded-sm">
                <ChevronsRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </main>
      </div>
      <FooterComp />
    </div>
  );
};
