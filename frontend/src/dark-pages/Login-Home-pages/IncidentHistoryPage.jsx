import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserLoginHomeNavbar from './UserLoginHomeNavbar';
import  FooterComp  from '../../components/FooterComp';

export const IncidentHistoryPage = () => {
  const { id } = useParams(); 
  const [incident, setIncident] = useState(null);

  useEffect(() => {
    const fetchIncident = async () => {
      const fetchedIncident = {
        referenceId: 'INC124',
        createDate: '2024-11-10',
        username: 'John Doe',
        contactNo: '123-456-7890',
        currentStatus: 'Assigned',
        assignDate: '2024-11-11',
        assignedDepartment: 'IT Support',
        departmentContactNo: '987-654-3210',
        assignedEmployee: 'Jane Smith',
      };
      setIncident(fetchedIncident);
    };

    fetchIncident();
  }, [id]);

  return (
    <div className="bg-[#1a202c] min-h-screen flex flex-col">
      <UserLoginHomeNavbar />
      <div className="flex-grow container mx-auto p-4 mt-20">
        {incident ? (
          <div>
            <h1 className="text-3xl font-bold text-center text-white mb-8">
              Incident History - {incident.referenceId}
            </h1>

            {/* Incident Details Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Incident Details */}
              <div className="bg-gray-800 text-white rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-4">Incident Details</h2>
                {[
                  { label: 'Incident Reference No.', value: incident.referenceId },
                  { label: 'Incident Created On', value: incident.createDate },
                  { label: 'Username', value: incident.username },
                  { label: 'User Contact No.', value: incident.contactNo },
                  { label: 'Current Status', value: incident.currentStatus }
                ].map((detail) => (
                  <div key={detail.label} className="flex justify-between py-1">
                    <span className="font-semibold">{detail.label}:</span>
                    <span>{detail.value}</span>
                  </div>
                ))}
              </div>

              {/* Assignment Details */}
              <div className="bg-gray-800 text-white rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-4">Assignment Details</h2>
                {[
                  { label: 'Assigned On', value: incident.assignDate },
                  { label: 'Assigned Department', value: incident.assignedDepartment },
                  { label: 'Department Contact No.', value: incident.departmentContactNo },
                  { label: 'Assigned Employee', value: incident.assignedEmployee }
                ].map((detail) => (
                  <div key={detail.label} className="flex justify-between py-1">
                    <span className="font-semibold">{detail.label}:</span>
                    <span>{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-white">Loading...</p>
        )}
      </div>

      <div className="mt-auto">
        <FooterComp />
      </div>
    </div>
  );
};
