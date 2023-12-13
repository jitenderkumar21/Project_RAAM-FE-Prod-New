import React, { Suspense, useEffect, useState } from "react";
import "./MainPage.css";
import Timeslot from "./Timeslot";
import "./ClassDetail.css";
import "./MobileView.css";
import age from "../assets/age.png";
import duration from "../assets/duration.png";
import teacher from "../assets/teacher.png";
import dropIcon from "../assets/dropdown.png";
import closeDropDown from "../assets/closeDropdown.png";
const ClassDetail = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchClassData = async () => {
      const timezone  = Intl.DateTimeFormat().resolvedOptions().timeZone;
      console.log(timezone, "timezone")
      try {
        const response = await fetch(`https://backend-z29v.onrender.com/info?timezone=${timezone}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.log("Error");
      }
    };

    fetchClassData();
  }, []);

  // console.log(data,"after api call")

  const transformedClasses = data.reduce((result, classItem) => {
    result[classItem.id] = "";
    return result;
  }, {});

  const transformedfullClasses = data.reduce((result, classItem) => {
    result[classItem.id] = [];
    return result;
  }, {});

  const [newfulldata, setNewFullData] = useState(transformedfullClasses);

  useEffect(() => {
    if (Object.keys(props.fullclass).length > 0) {
      setNewFullData(props.fullclass);
    }
  }, [props.fullclass]);

  const storedSelections = localStorage.getItem("selectedTimeSlots");
  let initial_state = {};
  if (storedSelections) {
    initial_state = JSON.parse(storedSelections);
  } else {
    initial_state = transformedClasses;
  }


  const storedmoreSelections = localStorage.getItem("moreSlots");
  let more_select_state = {};
  if (storedmoreSelections) {
    more_select_state = JSON.parse(storedmoreSelections);
  }

  const [expandedClassId, setExpandedClassId] = useState(null);
  const [selectedTimeslots, setSelectedTimeslots] = useState(initial_state);
  const [moreslots, setMoreSlots] = useState(more_select_state);
  const [isActive, setIsActive] = useState(true)
  const [filteredData, setFilteredData] = useState([])
  

  useEffect(() => {
    localStorage.setItem(
      "selectedTimeSlots",
      JSON.stringify(selectedTimeslots)
    );
  }, [selectedTimeslots]);

  useEffect(() => {
    if (data.length !=0) {
    localStorage.setItem(
      "data",
      JSON.stringify(data)
    );}
  }, [data]);

  useEffect(() => {
    localStorage.setItem("moreSlots", JSON.stringify(moreslots));
  }, [moreslots]);

  const toggleDescription = (classId) => {
    if (expandedClassId === classId) {
      setExpandedClassId(null);
    } else {
      setExpandedClassId(classId);
    }
  };

  const handleTimeslotSelection = (classid, timeslotname) => {
    setSelectedTimeslots((prevSelectedTimeSlots) => {
      const updatedSelection = { ...prevSelectedTimeSlots };
      if (updatedSelection[classid] === timeslotname) {
        delete updatedSelection[classid];
      } else {
        updatedSelection[classid] = timeslotname;
      }
      return updatedSelection;
    });

    if (timeslotname != "Want another slot") {
      setMoreSlots((moreslots) => {
        const updatedSelection = { ...moreslots };
        if (classid in updatedSelection) {
          delete updatedSelection[classid];
        }

        return updatedSelection;
      });
    }

    if (timeslotname == "Want another slot") {
      setMoreSlots((moreslots) => {
        const updatedSelection = { ...moreslots };
        if (classid in updatedSelection) {
          delete updatedSelection[classid];
        } else {
          updatedSelection[classid] = "Want another slot:";
        }
        return updatedSelection;
      });
    }
  };

  const liveClassHandler = () =>{
    setIsActive(true)
    setFilteredData(data.filter((classitem) => !classitem.timeslots.includes('')))
  }

  const pastClassHandler = () =>{
    setIsActive(false)
    setFilteredData(data.filter((classitem) => classitem.timeslots.includes('')))
  }

  useEffect(() => {
    setFilteredData(data.filter((classitem) => !classitem.timeslots.includes('')))
  }, [data])

  useEffect(() => {
    const resultArray = Object.keys(selectedTimeslots).map((classid) => {
      console.log(selectedTimeslots, "in the send data funtuon")
      let timeslot = selectedTimeslots[classid];
      if (timeslot === "Want another slot") {
        timeslot = moreslots[classid];
      }
      
      let classInfo = data.find((classInfo) => classInfo.id === classid);
      let final_data =[]

      if (!classInfo) {
        const new_data = localStorage.getItem('data')
        final_data = JSON.parse(new_data)
        classInfo = final_data.find((classInfo) => classInfo.id === classid);
      }
      
      const className = classInfo ? classInfo.title : "xyz";
      console.log(className, "classname")

      return {
        classid,
        className,
        timeslot: timeslot || "",
      };
    });

    // const newArray = resultArray.map((obj) => obj[className] = data.find[cla])

    props.onSendData(resultArray);
    console.log(resultArray, "selcted");
    props.onSelectTimeSlot(Object.keys(selectedTimeslots).length);
  }, [selectedTimeslots, moreslots]);


  const requiredTimeslotHandler = (classid, event) => {
    setMoreSlots((moreslot) => {
      const newslot = { ...moreslot };
      newslot[classid] =  "Want another Slot:" + event.target.value;
      return newslot;
    });
  };
 
  return (
    <div className="sub-cards-grid">
      <h1>Happy Exploring</h1>
      <div className='tab-style' >
        <p id ='live_class' className={isActive ? "underlined-text": "text"} onClick={liveClassHandler}> Live classes</p>
        <p id ='past_class' className={!isActive ? "underlined-text": "text"} onClick = {pastClassHandler}> Past classes</p>
      </div>
      <div>
        <div > 
          {filteredData.map((classes, index) => (
            <>
              <div
                className={index % 2 == 0 ? "sub-card" : "sub-card1"}
                id={props.scroll > 800 ? "animation" : ""}
              >
                <div id ={classes.id} className="class_card">
                  <div
                    className="class_card1"
                    onClick={() => toggleDescription(classes.id)}
                  >
                    <img src={classes.link}></img>
                  </div>
                  <div
                    className="class_card2"
                    onClick={() => toggleDescription(classes.id)}
                  >
                    <h3>{classes.title}</h3>
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
                    <h3>Select Time Slots</h3>
                    {classes.timeslots.map((timeslot, index) => (
                      <Timeslot
                        name={classes.title}
                        classid={classes.id}
                        timeslot={timeslot}
                        registrationClosed={
                          classes.isSlotOpen[index].toUpperCase() === "NO"
                        }
                        full={
                          newfulldata[classes.id]
                            ? newfulldata[classes.id].includes(timeslot)
                            : false
                        }
                        isSelected={selectedTimeslots[classes.id] == timeslot}
                        onSelect={handleTimeslotSelection}
                      />
                    ))}
                    {classes.id in moreslots && (
                      <div className="text1">
                        <p id="prefer">Enter Preferred Timing</p>
                        <input
                          className="textInput"
                          value={
                            moreslots[classes.id]
                              ? moreslots[classes.id].slice(18)
                              : ""
                          }
                          onChange={(event) =>
                            requiredTimeslotHandler(classes.id, event)
                          }
                          placeholder="E.g.- 20 Nov,5-6PM PST"
                        ></input>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="class_footer"
                  onClick={() => toggleDescription(classes.id)}
                >
                  <p className="description">
                    More Details
                    {expandedClassId != classes.id && (
                      <img src={dropIcon} alt="dropDown" className="icon" />
                    )}
                    {expandedClassId == classes.id && (
                      <img
                        src={closeDropDown}
                        alt="dropDown"
                        className="icon"
                      />
                    )}
                  </p>

                  {classes.id === expandedClassId && (
                    <>
                      <h3>ABOUT THE CLASS</h3>

                      <h5>Class Details</h5>
                      {classes.class_details
                        .split("\n")
                        .map((paragraph, index) => (
                          <p key={index} className="description">
                            {paragraph.split('*').map((text, index) => {
                                if (index % 2 === 0) {
                                   return <span key={index}>{text}</span>;
                                } else {
                                  return <strong style={{"textDecoration" : "underline"}} key={index}>{text}</strong>;
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
    </div>
  );
};

export default ClassDetail;
