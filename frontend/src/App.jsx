import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Userhome } from './dark-pages/Home-page/Userhome';
import  SignIn  from './dark-pages/Home-page/SignIn';
import  SignUp  from './dark-pages/Home-page/SignUp';
import  ServicePage  from './dark-pages/Home-page/ServicePage';
import { AboutUsPage } from './dark-pages/Home-page/AboutUsPage';
import  ContactUsPage  from './dark-pages/Home-page/ContactUsPage';
import { IncidentPage } from './dark-pages/Home-page/IncidentPage';
import { UserLoginHome } from './dark-pages/Login-Home-pages/UserLoginHome';
import  LoginServicePage  from './dark-pages/Login-Home-pages/LoginServicePage';
import { LoginAboutUsPage } from './dark-pages/Login-Home-pages/LoginAboutUsPage';
import  LoginContactUsPage  from './dark-pages/Login-Home-pages/LoginContactUsPage';
import { LoginIncidentPage } from './dark-pages/Login-Home-pages/LoginIncidentPage';
import { LoginReportedIncidentPage } from './dark-pages/Login-Home-pages/LoginReportedIncidentPage';
import { IncidentHistoryPage } from './dark-pages/Login-Home-pages/IncidentHistoryPage';
import  LoginUserProfile  from './dark-pages/Login-Home-pages/LoginUserProfile';
import  UserAccountSettings  from './dark-pages/Login-Home-pages/UserAccountSettings';
import  AdminDashboard  from './dark-pages/Admin-pages/AdminDashboard';
import  AdminAccountSettings  from './dark-pages/Admin-pages/AdminAccountSettings';
import  AdminEmployeeList  from './dark-pages/Admin-pages/AdminEmployeeList';
import  AdminAddEmployee  from './dark-pages/Admin-pages/AdminAddEmployee';
import  AdminDepartmentList  from './dark-pages/Admin-pages/AdminDepartmentList';
import  AdminAddDepartment  from './dark-pages/Admin-pages/AdminAddDepartment';
import  AdminEditDepartment from './dark-pages/Admin-pages/AdminEditDepartment';
import  AdminEditEmployee  from './dark-pages/Admin-pages/AdminEditEmployee';
import  AdminProfile  from './dark-pages/Admin-pages/AdminProfile';
import  AdminLogOut  from './dark-pages/Admin-pages/AdminLogOut';
import  AdminViewIncidents  from './dark-pages/Admin-pages/AdminViewIncidents';
import  FeedbackForm  from './dark-pages/Login-Home-pages/FeedbackForm';
import  FogotPasswordPage  from './dark-pages/Home-page/FogotPasswordPage';
import  ResetPasswordPage  from './dark-pages/Home-page/ResetPasswordPage';
import  AdminAssignIncident  from './dark-pages/Admin-pages/AdminAssignIncident';



function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-content">
          <Routes>

            {/* Home Page Section */}

            <Route path="/" element={<Userhome/>} />
            <Route path="/home" element={<Userhome/>} />
            <Route path="signin" element={<SignIn/>} />
            <Route path="signup" element={<SignUp/>} />
            <Route path="services" element={<ServicePage/>} />
            <Route path="about-us" element={<AboutUsPage/>} />
            <Route path="contact-us" element={<ContactUsPage/>} />
            <Route path="incidents" element={<IncidentPage/>} />
            <Route path="fogot-password" element={<FogotPasswordPage/>} />
            <Route path="reset-password" element={<ResetPasswordPage/>} />

            {/* Login Home Page Section */}

            <Route path="user-login-home" element={<UserLoginHome/>} />
            <Route path="user-login-service" element={<LoginServicePage/>} />
            <Route path="user-login-about-us" element={<LoginAboutUsPage/>} />
            <Route path="user-login-contact-us" element={<LoginContactUsPage/>} />
            <Route path="user-login-incident" element={<LoginIncidentPage/>} />
            <Route path="user-login-reported-incidents" element={<LoginReportedIncidentPage/>} />
            <Route path="/incident-history/:incident_id" element={<IncidentHistoryPage/>} />
            <Route path="user-profile" element={<LoginUserProfile/>} />
            <Route path="user-account-settings" element={<UserAccountSettings/>} />
            <Route path="feedback-form" element={<FeedbackForm/>} />


            {/* Admin Dashboard Section */}

            <Route path="admin-dashboard" element={<AdminDashboard/>} />
            <Route path="admin-view-incidents" element={<AdminViewIncidents/>} />
            <Route path="admin-employee-list" element={<AdminEmployeeList/>} />
            <Route path="admin-add-employee" element={<AdminAddEmployee/>} />
            <Route path="/admin-edit-employee/:id" element={<AdminEditEmployee/>} />
            <Route path="admin-department-list" element={<AdminDepartmentList/>} />
            <Route path="admin-add-department" element={<AdminAddDepartment/>} />
            <Route path="/admin-edit-department/:id" element={<AdminEditDepartment/>} />
            <Route path="admin-account-settings" element={<AdminAccountSettings/>} />
            <Route path="admin-profile" element={<AdminProfile/>} />
            <Route path="admin-log-out" element={<AdminLogOut/>} />
            <Route path="admin-assign-incidents/:id" element={<AdminAssignIncident/>} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

