import React, { useState } from "react";
import EnhancedTable from "./TableBody";
import "./CmsReport.css";
import FilterComponent from "./FilterComponent";

function CmsReport() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [filtervalue, setFilterValue] = useState({ tab1: {}, tab2: {} });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const ReportheadCells = [
    {
      id: "response_time",
      disablePadding: false,
      label: "Response Time",
    },
    {
      id: "class_id",
      disablePadding: false,
      label: "Class ID",
    },
    {
      id: "channel",
      disablePadding: false,
      label: "Channel",
    },
    {
      id: "type",
      disablePadding: false,
      label: "Type",
    },
    {
      id: "status",
      disablePadding: false,
      label: "Status",
    },
    {
      id: "reason",
      disablePadding: false,
      label: "Reason",
    },
    {
      id: "parent_email",
      disablePadding: false,
      label: "Parent_Email",
    },
    {
      id: "reminder_id",
      disablePadding: false,
      label: "Reminder_ID",
    },
  ];
  const EnrollmentheadCells = [
    {
      id: "parent_name",
      disablePadding: false,
      label: "Parent Name",
    },
    {
      id: "child_name",
      disablePadding: false,
      label: "Child Name",
    },
    {
      id: "email",
      disablePadding: false,
      label: "Email",
    },
    {
      id: "child_age",
      disablePadding: false,
      label: "Child Age",
    },
    {
      id: "phone_number",
      disablePadding: false,
      label: "Phone Number",
    },
  ];

  const filterDataHandler = (tab, filterArr) => {
    setFilterValue((prevState) => ({
      ...prevState,
      [tab]: filterArr,
    }));
  };

  return (
    <div className="tabbed-container">
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === "tab1" && "active"}`}
          onClick={() => handleTabClick("tab1")}
        >
          Report
        </button>
        <button
          className={`tab-button ${activeTab === "tab2" && "active"}`}
          onClick={() => handleTabClick("tab2")}
        >
          Enrollments
        </button>
      </div>

      <div>
        <FilterComponent
          activeTab={activeTab}
          onFilterData={filterDataHandler}
        />
        {activeTab === "tab1" && (
          <EnhancedTable headCells={ReportheadCells} tab="report" filtervalue={filtervalue[activeTab]} />
        )}
        {activeTab === "tab2" && (
          <EnhancedTable headCells={EnrollmentheadCells} tab="enrollments" filtervalue={filtervalue[activeTab]} />
        )}
      </div>
    </div>
  );
}

export default CmsReport;
