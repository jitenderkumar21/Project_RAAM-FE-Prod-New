import React from 'react'
import './ClassDetail.css'
import age from "../assets/age.png";
import duration from "../assets/duration.png";
import teacher from "../assets/teacher.png";
import dropIcon from "../assets/dropdown.png";
import closeDropDown from "../assets/closeDropdown.png";
import Timeslot from "./Timeslot";

const ClassCard = (props) => {
  console.log(props.selectedTimeslots, "selected")
  return (
    <div>
        <div>
          {props.filteredData.map((classes, index) => (
            <>
              <div
                className={index % 2 == 0 ? "sub-card" : "sub-card1"}
                id={props.scroll > 800 ? "animation" : ""}
              >
                <div id={classes.id} className="class_card">
                  <div
                    className="class_card1"
                    onClick={()=>props.onToggle(classes.id)}
                  >
                    <img src={classes.link}></img>
                  </div>
                  <div
                    className="class_card2"
                    onClick={()=>props.onToggle(classes.id)}
                  >
                    <h3>{classes.title}</h3>
                    <p className='ramen'><div className='dot'></div>{classes.class_tag}</p>
                    <p>
                      <img src={age} alt="ageIcon" className="icon" />
                      Age Group : {classes.age_group}
                    </p>
                    <p>
                      <img src={duration} alt="durationIcon" className="icon" />
                      Duration : {classes.duration}
                    </p>
                    <p>
                      <img src={teacher} alt="teacherIcon" className="icon" />
                      Teacher : {classes.tutor}
                    </p>
                  </div>
                  <div class="separator"></div>
                  <div className="class_card3">
                    <h3>{classes.display_timing}</h3>
                    {classes.timeslots.map((timeslot, index) => (
                      <Timeslot
                        name={classes.title}
                        classid={classes.id}
                        timeslot={timeslot}
                        tag={classes.class_tag}
                        index={index}
                        registrationClosed={timeslot.isPast}
                        full={
                          props.newfulldata[classes.id]
                            ? props.newfulldata[classes.id].includes(timeslot)
                            : false
                        }
                        isSelected={props.selectedTimeslots[classes.id]?props.selectedTimeslots[classes.id].some(obj => obj.subClassId === timeslot.subClassId):false}
                        onSelect={props.onSelect}
                      />
                    ))}

                    {classes.id in props.moreslots && (
                      <div className="text1">
                        <p id="prefer">Enter Preferred Timing</p>
                        <input
                          className="textInput"
                          value={
                            props.moreslots[classes.id]
                              ? props.moreslots[classes.id].slice(18)
                              : ""
                          }
                          onChange={(event) =>props.onTimeslotHandler(classes.id, event)
                          }
                          placeholder="E.g.- 20 Nov,5-6PM PST"
                        ></input>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="class_footer"
                  onClick={()=>props.onToggle(classes.id)}
                >
                  <p className="description">
                    More Details
                    {props.expandedClassId != classes.id && (
                      <img src={dropIcon} alt="dropDown" className="icon" />
                    )}
                    {props.expandedClassId == classes.id && (
                      <img
                        src={closeDropDown}
                        alt="dropDown"
                        className="icon"
                      />
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
                          {/* <p className="description">{classes.about_teacher}</p> */}
                          {classes.about_teacher
                            .split("\n")
                            .map((paragraph, index) => (
                              <p key={index} className="description">
                                {paragraph}
                                <br />
                              </p>
                            ))}
                          <h5>Teaching Philosophy</h5>
                          {/* <p className="description">{classes.teaching_philosophy}</p> */}
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
  )
}

export default ClassCard