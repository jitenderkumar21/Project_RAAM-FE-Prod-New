import React from "react";
import "./Timeslot.css";
import "./MobileView.css";
import { Tooltip } from "@mui/material";

const Timeslot = (props) => {
  // console.log(props.classid, props.datePassed, props.full, props.isPastClass)
  const course_type_list = ['course', 'playlist-1',"playlist-2"]
  return (
    <>
      {(props.full || props.datePassed || props.isPastClass) && (
          <Tooltip
            id="custom_tooltip"
            title={(props.full && !props.isPastClass) ? "Class Full" :"" }
            hover
            arrow
            placement="top"
          >
          <label className="container" id="full">
            {((course_type_list.includes(props.tag) && props.index === 0) ||
              !course_type_list.includes(props.tag)
              ) && (
              <input
                type="checkbox"
                checked={props.isSelected}
                disabled={course_type_list.includes(props.tag) ? (props.isPastClass || props.full) : true}
                onChange={() => props.onSelect(props.classid, props.timeslot)}
              />
            )}
            <span className="light_text">{props.timeslot.timing}</span>
            {((course_type_list.includes(props.tag) && props.index === 0) ||
              !course_type_list.includes(props.tag)) && <span className="checkmark" id= {props.timeslot.subClassId}></span>}

            {(props.full && !props.isPastClass) &&<span className="Hack" id="hack_ultra_pro_max">
              Class Full
            </span>}
          </label>
          </Tooltip>
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
            !course_type_list.includes(props.tag)) && <span className="checkmark" id= {props.timeslot.subClassId}></span>}
        </label>
      )}
    </>
  );
};

export default Timeslot;
