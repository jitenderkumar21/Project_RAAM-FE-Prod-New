import React from "react";
import "./ClassDetail.css";
import age from "../assets/age.png";
import duration from "../assets/duration.png";
import teacher from "../assets/teacher.png";
import dropIcon from "../assets/dropdown.png";
import closeDropDown from "../assets/closeDropdown.png";
import Timeslot from "./Timeslot";
import "./Timeslot.css";

const ClassCard = (props) => {
  const backgroundColorMap = {
    ongoing: "background-tag1",
    onetime: "background-tag2",
    "playlist-1": "background-tag3",
    "playlist-2": "background-tag3",
  };
  const course_type_list = ["course", "playlist-1", "playlist-2"];
  return (
    <div>
      <div>
        {props.filteredData.map((classes, index) => (
          <>
            <div
              className="sub-card"
              id={props.scroll > 800 ? "animation" : ""}
            >
              <div id={classes.id} className="class_card">
                <div
                  className="class_card1"
                  onClick={() => props.onToggle(classes.id)}
                >
                  <img src={classes.link} alt="class_link"></img>
                </div>

                <div
                  className="class_card2"
                  onClick={() => props.onToggle(classes.id)}
                >
                  <div>
                    <h3>{classes.title}</h3>
                  </div>
                  <p
                    className={`ramen ${
                      backgroundColorMap[classes.class_tag?.toLowerCase()] || ""
                    }`}
                  >
                    <div className="dot"></div>
                    {classes.class_tag.toLowerCase() === "playlist-1" ||
                    classes.class_tag.toLowerCase() === "playlist-2"
                      ? "Playlist"
                      : classes.class_tag}
                  </p>
                  <p> 
                    <img src={age} alt="ageIcon" className="icon" />
                    Age Group : {classes.age_group}
                  </p>
                  {window.innerWidth > 599 ? (
                    <p>
                      <img src={duration} alt="durationIcon" className="icon" />
                      Duration : {classes.duration}
                    </p>
                  ) : (
                    ""
                  )}
                  <p>
                    <img src={teacher} alt="teacherIcon" className="icon" />
                    Teacher : {classes.tutor}
                  </p>
                </div>
                <div class="separator"></div>
                <div className="class_card3">
                  <h3 style={{ color: "black" }}>{classes.display_timing}</h3>
                  {classes.timeslots.map((timeslot, index) =>
                    typeof timeslot === "object" ? (
                      <Timeslot
                        name={classes.title}
                        classid={classes.id}
                        timeslot={timeslot}
                        tag={classes.class_tag.toLowerCase()}
                        isPastClass={classes.isMoveToPast}
                        index={index}
                        datePassed={timeslot.isPast}
                        full={
                          props.newfulldata[classes.id]
                            ? props.newfulldata[classes.id].includes(
                                timeslot.subClassId
                              )
                            : false
                        }
                        isSelected={
                          props.selectedTimeslots[classes.id] &&
                          typeof props.selectedTimeslots[classes.id] ===
                            "object"
                            ? props.selectedTimeslots[classes.id].some(
                                (obj) => obj.subClassId === timeslot.subClassId
                              )
                            : false
                        }
                        onSelect={props.onSelect}
                      />
                    ) : (
                      ""
                    )
                  )}

                  {!classes.isMoveToPast && (props.newfulldata[classes.id]
                    ? props.newfulldata[classes.id].includes(
                        classes.timeslots[0].subClassId
                      )
                    : false) &&
                  course_type_list.includes(classes.class_tag.toLowerCase()) ? (
                    <div className="course-class-full">
                      <input
                        type="checkbox"
                        className="checkbox-harsh"
                        checked={Object.keys(props.selectedTimeslots).includes(classes.id)}
                        onChange={() =>
                          props.onSelect(classes.id, classes.timeslots[0], true)
                        }
                      />
                      
                      <span className="class-full"> Class Full - Join the waitlist </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div
                className="class_footer"
                onClick={() => props.onToggle(classes.id)}
              >
                <p className="description">
                  More Details
                  {props.expandedClassId !== classes.id && (
                    <img src={dropIcon} alt="dropDown" className="icon" />
                  )}
                  {props.expandedClassId === classes.id && (
                    <img src={closeDropDown} alt="dropDown" className="icon" />
                  )}
                </p>

                {classes.id === props.expandedClassId && (
                  <>
                    <h3>ABOUT THE CLASS</h3>

                    <h5>Class Details</h5>
                    {classes.class_details
                      .split("\n")
                      .map((paragraph, index) => (
                        <p key={index} className="description">
                          {paragraph.split("*").map((text, index) => {
                            if (index % 2 === 0) {
                              return <span key={index}>{text}</span>;
                            } else {
                              return (
                                <strong
                                  style={{ textDecoration: "underline" }}
                                  key={index}
                                >
                                  {text}
                                </strong>
                              );
                            }
                          })}
                          <br />
                        </p>
                      ))}
                    <h5>Prerequisite</h5>
                    {/* <p className="description">{classes.prerequisite}</p> */}
                    {classes.prerequisite
                      .split("\n")
                      .map((paragraph, index) => (
                        <p key={index} className="description">
                          {paragraph}
                          <br />
                        </p>
                      ))}
                    <h5>Learning Outcomes</h5>
                    {/* <p className="description">{classes.learning_outcomes}</p> */}
                    {classes.learning_outcomes
                      .split("\n")
                      .map((paragraph, index) => (
                        <p key={index} className="description">
                          {paragraph}
                          <br />
                        </p>
                      ))}
                    <h3>MEET YOUR TEACHER</h3>
                    <div className="about_teacher">
                      <img src={classes.teacher_pic} alt="teacher_pic"></img>
                      <div>
                     
                        {classes.about_teacher
                          .split("\n")
                          .map((paragraph, index) => (
                            <p key={index} className="description">
                              {paragraph}
                              <br />
                            </p>
                          ))}
                        <h5>Teaching Philosophy</h5>
                       
                        {classes.teaching_philosophy
                          .split("\n")
                          .map((paragraph, index) => (
                            <p key={index} className="description">
                              {paragraph}
                              <br />
                            </p>
                          ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ClassCard;
