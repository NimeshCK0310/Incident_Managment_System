import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { FiCheckCircle, FiAlertTriangle, FiXCircle } from "react-icons/fi";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import PropTypes from "prop-types"; 

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AdminDashboard = () => {
  const departmentData = {
    labels: ["Dept A", "Dept B", "Dept C", "Dept D"],
    datasets: [
      {
        label: "Incidents",
        data: [20, 32, 28, 16],
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"],
      },
    ],
  };

  const incidentSummaryData = {
    labels: ["Pending", "Assigned", "Completed"],
    datasets: [
      {
        data: [32, 64, 4],
        backgroundColor: ["#6366f1", "#fbbf24", "#ef4444"],
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <AdminSidebar />
      <div className="flex-grow flex flex-col overflow-auto ml-20"> 
        <AdminNavbar />
        <main className="p-4 flex-grow bg-gray-900">
          {/* Header Section */}
          <h1 className="text-lg font-bold mb-4">CRUCIAL INCIDENTS</h1>

          {/* Incident Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <IncidentCard title="Signal Interrupts" date="2024/10/27" status="Assigned" Icon={FiAlertTriangle} />
            <IncidentCard title="Signal Interrupts" date="2024/10/27" status="Assigned" Icon={FiAlertTriangle} />
            <IncidentCard title="Signal Interrupts" date="2024/10/27" status="Not Assigned" Icon={FiXCircle} />
            <IncidentCard title="Signal Interrupts" date="2024/10/27" status="Completed" Icon={FiCheckCircle} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-gray-800 rounded-lg">
              <p className="font-semibold mb-4">Incident Summary</p>
              <div className="relative h-64">
                <Pie data={incidentSummaryData} options={{ maintainAspectRatio: false }} />
              </div>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg">
              <p className="font-semibold mb-4">Department Wise Analysis</p>
              <div className="relative h-64">
                <Bar data={departmentData} options={{ maintainAspectRatio: false }} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const IncidentCard = ({ title, date, status, Icon }) => {
  const statusColors = {
    "Assigned": "bg-blue-500",
    "Not Assigned": "bg-red-600",
    "Completed": "bg-green-600",
  };

  return (
    <button
      className="relative w-full p-4 rounded border border-slate-300 overflow-hidden group bg-gray-800 focus:outline-none">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-indigo-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

      <Icon className="absolute -top-10 -right-10 text-9xl text-slate-100 transform group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white relative z-10 transition-colors duration-300" />

      <h3 className="font-medium text-lg text-slate-100 relative z-10 group-hover:text-white duration-300">
        {title}
      </h3>
      <p className="text-slate-400 relative z-10 group-hover:text-violet-200 duration-300">{date}</p>

      <span className={`mt-2 px-3 py-1 rounded-full text-sm ${statusColors[status]} text-white relative z-10 duration-300`}>
        {status}
      </span>
    </button>
  );
};


IncidentCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["Assigned", "Not Assigned", "Completed"]).isRequired,
  Icon: PropTypes.elementType.isRequired,
};

export default AdminDashboard;
