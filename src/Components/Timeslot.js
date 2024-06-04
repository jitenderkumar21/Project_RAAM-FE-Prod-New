import React from "react";
import "./Timeslot.css";
import "./MobileView.css";
import { Tooltip } from "@mui/material";

const Timeslot = (props) => {
  const course_type_list = ["course", "playlist-1", "playlist-2"];
  return (
    <>
      {(props.full || props.datePassed || props.isPastClass) && (
        <label className="container" id="full">
          {((course_type_list.includes(props.tag) && props.index === 0) ||
            !course_type_list.includes(props.tag)) && (
            <input
              type="checkbox"
              checked={props.isSelected}
              disabled={
                props.isPastClass
              }
              onChange={() =>
                props.onSelect(props.classid, props.timeslot, props.full)
              }
            />
          )}
          <span className="light_text">{props.timeslot.timing}</span>

          {!course_type_list.includes(props.tag) && (
            <>
              <span className="checkmark" id={!props.isPastClass && props.full ? `waitlist-${props.timeslot.subClassId}` : props.timeslot.subClassId}></span>
              {!props.isPastClass && props.full && (
                <p className="class-full"> Class Full - Join the waitlist </p>
              )}
            </>
          )}
          {(course_type_list.includes(props.tag) && props.index === 0 && (!props.full || props.isPastClass)) && (
            <span className="checkmark" id={props.timeslot.subClassId}></span>
          )}
        </label>
      )}

      {!props.full && !props.datePassed && !props.isPastClass && (
        <label className="container">
          {((course_type_list.includes(props.tag) && props.index === 0) ||
            !course_type_list.includes(props.tag)) && (
            <input
              type="checkbox"
              checked={props.isSelected}
              onChange={() => props.onSelect(props.classid, props.timeslot)}
            />
          )}
          <span className="light_text">{props.timeslot.timing}</span>
          {((course_type_list.includes(props.tag) && props.index === 0) ||
            !course_type_list.includes(props.tag)) && (
            <span className="checkmark" id={props.timeslot.subClassId}></span>
          )}
        </label>
      )}
    </>
  );
};

export default Timeslot;
