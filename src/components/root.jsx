import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import React from "react";
import Dashboard from "../pages/Dashboard/dashboead";

function Root() {
  return <SubRoot />;
}

function SubRoot() {
  return (
    <div className="d-flex flex-row">
      <Sidebar />

      <div className="d-flex flex-column flex-grow-1">
        <Navbar />

        <div
          className="bg-light flex-grow-1"
          style={{ height: "0px", overflowY: "auto" }}
        >
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default Root;
