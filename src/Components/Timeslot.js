import React from "react";
import "./Timeslot.css";
import { Tooltip } from "@mui/material";

const Timeslot = ({ timeslot, classid, isSelected, onSelect, full }) => {
  return (
    <>
      {full && (
        <Tooltip id="custom_tooltip" title="Classes Full" hover arrow placement="top-end">
          <label className="container" id="full">
            <input
              type="checkbox"
              checked={isSelected}
              disabled
              onChange={() => onSelect(classid, timeslot)}
            />
            <span className="light_text">{timeslot}</span>
            <span class="checkmark"></span>
          </label>
        </Tooltip>
      )}

      {!full && (
        <label className="container">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onSelect(classid, timeslot)}
          />
          <span className="light_text">{timeslot}</span>
          <span class="checkmark"></span>
        </label>
      )}
    </>
  );
};

export default Timeslot;
