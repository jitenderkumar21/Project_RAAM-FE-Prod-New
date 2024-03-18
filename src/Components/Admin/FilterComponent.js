import React from "react";
import { useState } from "react";
import "./FilterComponent.css";

const FilterComponent = (props) => {
  const [formData, setFormData] = useState({
    tab1: { classId: "", channel: "", type: "", status: "" },
    tab2: { classId: "" },
  });

  const handleInputChange = (tab, field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [tab]: {
        ...prevState[tab],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onFilterData(props.activeTab, formData[props.activeTab])
  };

  return (
    <form onSubmit={handleSubmit} className="form-type">
      {props.activeTab === "tab1" && (
        <div className="form-field">
        <h3> Class Id </h3>
          <input
            type="text"
            value={formData.tab1.classId}
            placeholder="Enter Class ID"
            onChange={(e) =>
              handleInputChange("tab1", "classId", e.target.value)
            }
          />
          <h3> Channel </h3>
          <select
            value={formData.tab1.channel}
            onChange={(e) =>
              handleInputChange("tab1", "channel", e.target.value)
            }
          >
            <option value=""> Select an option</option>
            <option value="CALENDER">CALENDER</option>
            <option value="SHEETS">SHEETS</option>
            <option value="EMAIL">EMAIL</option>
            <option value="WHATSAPP">WHATSAPP</option>
          </select>
          <h3> Type </h3>
          <select
            value={formData.tab1.type}
            onChange={(e) => handleInputChange("tab1", "type", e.target.value)}
          >
            <option value=""> Select an option</option>
            <option value="Parent Reminder">Parent Reminder</option>
            <option value="Save Enrollments">Save Enrollments</option>
            <option value="Parent Confimation">Parent Confimation</option>
            <option value="Coral Confimation">Coral Confimation</option>
            <option value="Teacher Calender Block">Teacher Calender Block</option>
            <option value="Teacher Confimation">Teacher Confimation</option>
          </select>
          <h3> Status </h3>
          <select
            value={formData.tab1.status}
            onChange={(e) =>handleInputChange("tab1", "status", e.target.value)}
          >
            <option value=""> Select an option</option>
            <option value="SUCCESS">SUCCESS</option>
            <option value="FAILURE">FAILURE</option>
          </select>
        </div>
      )}

      {props.activeTab === "tab2" && (
        <div className="form-field">
            <h3> Class Id</h3>
          <input
            type="text"
            value={formData.tab2.classId}
            placeholder="Enter Class ID"
            onChange={(e) =>
              handleInputChange("tab2", "classId", e.target.value)
            }
          />
        </div>
      )}
      <button type="submit">Apply Filters</button>
    </form>
  );
};

export default FilterComponent;
