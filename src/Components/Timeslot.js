import React from "react";
import "./Timeslot.css";
import { Tooltip } from "@mui/material";

const Timeslot = ({ timeslot, classid, isSelected, onSelect, full }) => {
  // console.log(full, classid, timeslot);
  return (
    <>
      {full && (
        <Tooltip id="custom_tooltip" title="Classes Full" hover placement="top">
          <label className="container" id="full">
            <input
              type="checkbox"
              checked={isSelected}
              disabled
              onChange={() => onSelect(classid, timeslot)}
            />
            {timeslot}
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
          {timeslot}
          <span class="checkmark"></span>
        </label>
      )}
    </>
  );
};

export default Timeslot;
