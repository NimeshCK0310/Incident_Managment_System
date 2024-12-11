import React, { useState } from "react";
import PropTypes from "prop-types"; 
import { FiChevronsRight, FiHome, FiTag, FiUsers, FiSettings, FiLogOut, FiMonitor } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

const AdminSidebar = () => {
  const [open, setOpen] = useState(false); 
  const [selected, setSelected] = useState("Dashboard");

  const options = [
    { Icon: FiHome, title: "Dashboard", to: "/admin-dashboard" },
    { Icon: FiMonitor, title: "View Incidents", to: "/admin-view-incidents" },
    { Icon: FiUsers, title: "Add Employee", to: "/admin-employee-list" },
    { Icon: FiTag, title: "Add Departments", to: "/admin-department-list" },
    { Icon: FiSettings, title: "Account Settings", to: "/admin-account-settings" },
    { Icon: FiLogOut, title: "Log Out", to: "/admin-log-out" },
  ];

  return (
    <motion.nav
      layout
      className="fixed top-0 left-0 h-full bg-gray-800 p-4 flex flex-col space-y-2 z-50"
      style={{
        width: open ? "225px" : "80px", 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex flex-col">
        <TitleSection open={open} />

        <div className="space-y-1">
          {options.map((option) => (
            <Option
              key={option.title}
              Icon={option.Icon}
              title={option.title}
              to={option.to}
              selected={selected}
              setSelected={setSelected}
              open={open}
            />
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <ToggleClose open={open} setOpen={setOpen} />
      </div>
    </motion.nav>
  );
};

const Option = ({ Icon, title, selected, setSelected, open, to }) => (
  <motion.button
    layout
    className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
      selected === title ? "bg-indigo-600 text-white" : "text-gray-400 hover:bg-gray-700 hover:text-white"
    }`}
  >
    <Link
      to={to}
      className="w-full flex items-center space-x-3 px-3 py-2"
      onClick={() => setSelected(title)}
    >
      <motion.div layout className="grid h-full w-10 place-content-center text-lg">
        <Icon />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-medium"
        >
          {title}
        </motion.span>
      )}
    </Link>
  </motion.button>
);

// Add PropTypes for Option
Option.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
};

const TitleSection = ({ open }) => (
  <div className="mb-3 border-b border-gray-700 pb-3">
    <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-gray-700">
      <div className="flex items-center gap-2">
        <Logo />
        {open && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
          >
            <span className="block text-xs font-semibold text-white">Sri Lanka Telecom</span>
            <span className="block text-xs text-gray-400">Mobitel</span>
          </motion.div>
        )}
      </div>
    </div>
  </div>
);

// Add PropTypes for TitleSection
TitleSection.propTypes = {
  open: PropTypes.bool.isRequired,
};

const Logo = () => (
  <motion.div layout className="grid size-10 shrink-0 place-content-center rounded-md">
    <img src={logo} alt="Logo" className="w-10 h-5" />
  </motion.div>
);

const ToggleClose = ({ open, setOpen }) => (
  <motion.button
    layout
    onClick={() => setOpen((prev) => !prev)} 
    className="absolute bottom-0 left-0 right-0 border-t border-gray-700 transition-colors hover:bg-gray-700"
  >
    <div className="flex items-center p-2">
      <motion.div layout className="grid size-10 place-content-center text-lg">
        <FiChevronsRight className={`transition-transform ${open && "rotate-180"}`} />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-medium text-white"
        >
          Hide
        </motion.span>
      )}
    </div>
  </motion.button>
);

// Add PropTypes for ToggleClose
ToggleClose.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default AdminSidebar;
