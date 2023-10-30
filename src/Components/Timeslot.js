import React from "react";
import "./Timeslot.css";
import "./MobileView.css"
import { Tooltip } from "@mui/material";

const Timeslot = ({ timeslot, classid, isSelected, onSelect, full, registrationClosed }) => {
  // console.log(registrationClosed, "registration")
    return (
    <>
      {(full || registrationClosed) && (
        <Tooltip id="custom_tooltip" title="Class Full" hover arrow placement="top">
          <label className="container" id="full">
            <input
              type="checkbox"
              checked={isSelected}
              disabled
              onChange={() => onSelect(classid, timeslot)}
            />
            <span className="light_text">{timeslot}</span>
            <span className="checkmark"></span>
            <span className="Hack" id="hack_ultra_pro_max">Class Full</span>
          </label>
          
        </Tooltip>
      )}

      {(!full && !registrationClosed) && (
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
