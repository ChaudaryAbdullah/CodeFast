import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/User/Dashboard";
import Account from "../Components/User/Account";

const StudentLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex-grow bg-gray-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
};

export default StudentLayout;
