import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const AdminAssignIncident = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    referenceNo: "",
    customerName: "",
    customerEmail: "",
    incidentTitle: "",
    incidentType: "",
    incidentDescription: "",
    employeeName: "",
    departmentName: "",
    postalCode: "",
    progressStatus: "",
    assignedDate: "",
  });
  const [employees, setEmployees] = useState([]); 
  const [departments, setDepartments] = useState([]); 

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await fetch(`/api/customers/${id}`);
        const data = await response.json();
        setFormData((prev) => ({
          ...prev,
          referenceNo: data.referenceNo,
          customerName: data.customerName,
          customerEmail: data.customerEmail,
          incidentTitle: data.incidentTitle,
          incidentType: data.incidentType,
          incidentDescription: data.incidentDescription,
        }));
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    const fetchEmployees = async () => {
      try {
        const response = await fetch(`/api/employees`); 
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    const fetchDepartments = async () => {
      try {
        const response = await fetch(`/api/departments`);
        const data = await response.json();
        setDepartments(data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchCustomerData();
    fetchEmployees();
    fetchDepartments();

    const today = new Date().toISOString().split("T")[0];
    setFormData((prev) => ({
      ...prev,
      assignedDate: today,
    }));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/assign-team/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/employee-incident-progress");
      } else {
        console.error("Failed to assign team");
      }
    } catch (error) {
      console.error("Error assigning team:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <AdminSidebar />
      <div className="flex-grow flex flex-col overflow-auto ml-20">
        <AdminNavbar />
        <main className="p-4 flex-grow bg-gray-900">
          <div className="flex items-center mb-4">
            <button onClick={() => navigate(-1)} className="mr-4 text-white">
              <FaArrowLeft />
            </button>
            <h2 className="text-2xl font-semibold">Assign Incident</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-4xl mx-auto">
            {/* Reference No Field */}
            <div className="form-group">
              <label htmlFor="referenceNo" className="block">Reference No</label>
              <input
                type="text"
                id="referenceNo"
                name="referenceNo"
                value={formData.referenceNo}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                disabled
              />
            </div>

            {/* Customer Name */}
            <div className="form-group">
              <label htmlFor="customerName" className="block">Customer Name</label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                disabled
              />
            </div>

            {/* Customer Email */}
            <div className="form-group">
              <label htmlFor="customerEmail" className="block">Customer Email</label>
              <input
                type="email"
                id="customerEmail"
                name="customerEmail"
                value={formData.customerEmail}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                disabled
              />
            </div>

            {/* Incident Title */}
            <div className="form-group">
              <label htmlFor="incidentTitle" className="block">Incident Title</label>
              <input
                type="text"
                id="incidentTitle"
                name="incidentTitle"
                value={formData.incidentTitle}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                disabled
              />
            </div>

            {/* Incident Type */}
            <div className="form-group">
              <label htmlFor="incidentType" className="block">Incident Type</label>
              <input
                type="text"
                id="incidentType"
                name="incidentType"
                value={formData.incidentType}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                disabled
              />
            </div>

            {/* Incident Description */}
            <div className="form-group">
              <label htmlFor="incidentDescription" className="block">Incident Description</label>
              <textarea
                id="incidentDescription"
                name="incidentDescription"
                value={formData.incidentDescription}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                disabled
              />
            </div>

            {/* Postal Code Field */}
            <div className="form-group">
              <label htmlFor="postalCode" className="block">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                disabled
              />
            </div>

            {/* Employee Name Dropdown */}
            <div className="form-group">
              <label htmlFor="employeeName" className="block">Employee Name</label>
              <select
                id="employeeName"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                required
              >
                <option value="">Select Employee</option>
                {employees.map((employee) => (
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Department Name Dropdown */}
            <div className="form-group">
              <label htmlFor="departmentName" className="block">Department Name</label>
              <select
                id="departmentName"
                name="departmentName"
                value={formData.departmentName}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-gray-800 text-white"
                required
              >
                <option value="">Select Department</option>
                {departments.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Progress Status Dropdown */}
               <div className="form-group">
                  <label htmlFor="progressStatus" className="block">Progress Status</label>
                  <select
                     id="progressStatus"
                     name="progressStatus"
                     value={formData.progressStatus || ""}
                     onChange={handleInputChange}
                     className="w-full p-2 rounded bg-gray-800 text-white"
                     required
                  >
                    <option value="">Select Progress Status</option>
                    <option value="Complete">Complete</option>
                    <option value="In Progress">Assigned</option>
                    <option value="Pending">Pending</option>
                 </select>
               </div>

            {/* Assigned Date */}
            <div className="form-group">
              <label htmlFor="assignedDate" className="block">Assigned Date</label>
              <input
                type="date"
                id="assignedDate"
                name="assignedDate"
                value={formData.assignedDate}
                className="w-full p-2 rounded bg-gray-800 text-white"
                disabled
              />
            </div>

            {/* Submit Button */}
            <div className="form-group mt-4 text-right">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Assign Incident
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AdminAssignIncident;
