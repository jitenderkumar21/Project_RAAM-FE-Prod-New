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

  // const data = [
  //   {
  //     id: 1,
  //     title: "Travel the World with Mr. Clark",
  //     class_details:
  //       "To improve our understanding of different cultures around the world, including their histories, geography, culinary culture, music and dance. To learn and comprehend the life lessons the stories contain, and to improve vocabulary",
  //     prerequisite:
  //       "There are no materials needed, however, you may choose to download and print the blank letter of the day sheet to decor",
  //     learning_outcomes:
  //       "To improve our understanding of different cultures around the world, including their history and geography and everything!",

  //     about_teacher:
  //       "Hello! I'm Sorrel. I'm deeply passionate about the intricate tapestry of Myths, Legends, Philosophy, and the intricacies of the human psyche. With a Master's in Psychology and a Bachelor's in Philosophy and History, I've always approached teaching with a twist. My aim? To kindle curiosity and hone the analytical prowess of young minds.",
  //     teaching_philosophy:
  //       "To improve our understanding of different cultures around the world, including their histories.",
  //     teacher_pic: instructor,
  //     age_group: "8-13 years old",
  //     duration: "1 Hour (50 mins - Class, 10 mins - Feedback)",
  //     expand: false,
  //     link: "https://static.wixstatic.com/media/27d523f50e781626c04fc109dd313241.jpg/v1/crop/x_101,y_0,w_406,h_306/fill/w_214,h_161,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Geography%20Lesson.jpg",
  //     tutor: "Misses Dee",
  //     timeslots: [
  //       "1 Nov, Wednesday, 6PM - 7PM (PST)",
  //       "2 Nov,, Thursday, 6PM - 7PM (PST)",
  //       "Want another slot",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Mind Gym: Working out With Logic Puzzles",
  //     class_details:
  //       "To improve our understanding of different cultures around the world, including their histories, geography, culinary culture, music and dance. To learn and comprehend the life lessons the stories contain, and to improve vocabulary",
  //     prerequisite:
  //       "There are no materials needed, however, you may choose to download and print the blank letter of the day sheet to decor",
  //     learning_outcomes:
  //       "To improve our understanding of different cultures around the world, including their history and geography and everything!",

  //     about_teacher:
  //       "Hello! I'm Sorrel. I'm deeply passionate about the intricate tapestry of Myths, Legends, Philosophy, and the intricacies of the human psyche. With a Master's in Psychology and a Bachelor's in Philosophy and History, I've always approached teaching with a twist. My aim? To kindle curiosity and hone the analytical prowess of young minds.",
  //     teaching_philosophy:
  //       "To improve our understanding of different cultures around the world, including their histories.",
  //     expand: false,
  //     teacher_pic: instructor,
  //     age_group: "8-13 years old",
  //     duration: "1 Hour (50 mins - Class, 10 mins - Feedback)",
  //     link: "https://static.wixstatic.com/media/11062b_54cb26d9ed2049d9a1a6259e29ef373d~mv2_d_5251_3501_s_4_2.jpg/v1/crop/x_314,y_0,w_4623,h_3501/fill/w_216,h_164,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Playing%20with%20Toy%20Vehicles.jpg",
  //     tutor: "Vyshali",
  //     timeslots: [
  //       "1 Nov, Wednesday, 6PM - 7PM (PST)",
  //       "2 Nov, Thursday, 6PM - 7PM (PST)",
  //       "Want another slot",
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Electoral College",
  //     class_details:
  //       "To improve our understanding of different cultures around the world, including their histories, geography, culinary culture, music and dance. To learn and comprehend the life lessons the stories contain, and to improve vocabulary",
  //     prerequisite:
  //       "There are no materials needed, however, you may choose to download and print the blank letter of the day sheet to decor",
  //     learning_outcomes:
  //       "To improve our understanding of different cultures around the world, including their history and geography and everything!",

  //     about_teacher:
  //       "Hello! I'm Sorrel. I'm deeply passionate about the intricate tapestry of Myths, Legends, Philosophy, and the intricacies of the human psyche. With a Master's in Psychology and a Bachelor's in Philosophy and History, I've always approached teaching with a twist. My aim? To kindle curiosity and hone the analytical prowess of young minds.",
  //     teaching_philosophy:
  //       "To improve our understanding of different cultures around the world, including their histories.",
  //     teacher_pic: instructor,
  //     age_group: "8-13 years old",
  //     expand: false,
  //     duration: "1 Hour (50 mins - Class, 10 mins - Feedback)",
  //     link: "https://static.wixstatic.com/media/11062b_fb6986eb84c14649b94d523c1f2eac5b~mv2.jpg/v1/crop/x_237,y_0,w_3526,h_2670/fill/w_216,h_164,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/College%20Campus.jpg",
  //     tutor: "Shagun",
  //     timeslots: [
  //       "1 Nov, Wednesday, 6PM - 7PM (PST)",
  //       "2 Nov, Thursday, 6PM - 7PM (PST)",
  //       "Want another slot",
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: "Electoral College",
  //     class_details:
  //       "To improve our understanding of different cultures around the world, including their histories, geography, culinary culture, music and dance. To learn and comprehend the life lessons the stories contain, and to improve vocabulary",
  //     prerequisite:
  //       "There are no materials needed, however, you may choose to download and print the blank letter of the day sheet to decor",
  //     learning_outcomes:
  //       "To improve our understanding of different cultures around the world, including their history and geography and everything!",

  //     about_teacher:
  //       "Hello! I'm Sorrel. I'm deeply passionate about the intricate tapestry of Myths, Legends, Philosophy, and the intricacies of the human psyche. With a Master's in Psychology and a Bachelor's in Philosophy and History, I've always approached teaching with a twist. My aim? To kindle curiosity and hone the analytical prowess of young minds.",
  //     teaching_philosophy:
  //       "To improve our understanding of different cultures around the world, including their histories.",
  //     age_group: "8-13 yeaars old",
  //     teacher_pic: instructor,
  //     expand: false,
  //     duration: "1 Hour (50 mins - Class, 10 mins - Feedback)",
  //     link: "https://static.wixstatic.com/media/11062b_fb6986eb84c14649b94d523c1f2eac5b~mv2.jpg/v1/crop/x_237,y_0,w_3526,h_2670/fill/w_216,h_164,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/College%20Campus.jpg",
  //     tutor: "Ram Kumar",
  //     timeslots: [
  //       "1 Nov, Wednesday, 6PM - 7PM (PST)",
  //       "2 Nov, Thursday, 6PM - 7PM (PST)",
  //       "Want another slot",
  //     ],
  //   },
  //   {
  //     id: 5,
  //     title: "Electoral College",
  //     class_details:
  //       "To improve our understanding of different cultures around the world, including their histories, geography, culinary culture, music and dance. To learn and comprehend the life lessons the stories contain, and to improve vocabulary",
  //     prerequisite:
  //       "There are no materials needed, however, you may choose to download and print the blank letter of the day sheet to decor",
  //     learning_outcomes:
  //       "To improve our understanding of different cultures around the world, including their history and geography and everything!",

  //     about_teacher:
  //       "Hello! I'm Sorrel. I'm deeply passionate about the intricate tapestry of Myths, Legends, Philosophy, and the intricacies of the human psyche. With a Master's in Psychology and a Bachelor's in Philosophy and History, I've always approached teaching with a twist. My aim? To kindle curiosity and hone the analytical prowess of young minds.",
  //     teaching_philosophy:
  //       "To improve our understanding of different cultures around the world, including their histories.",
  //     age_group: "8-13 years old",
  //     teacher_pic: instructor,
  //     expand: false,
  //     duration: "1 Hour (50 mins - Class, 10 mins - Feedback)",
  //     link: "https://static.wixstatic.com/media/11062b_fb6986eb84c14649b94d523c1f2eac5b~mv2.jpg/v1/crop/x_237,y_0,w_3526,h_2670/fill/w_216,h_164,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/College%20Campus.jpg",
  //     tutor: "Ram Kumar",
  //     timeslots: [
  //       "1 Nov, Wednesday, 6PM - 7PM (PST)",
  //       "2 Nov, Thursday, 6PM - 7PM (PST)",
  //       "Want another slot",
  //     ],
  //   },
  // ];

  useEffect(() => {
    const fetchClassData = async () => {
      const timezone  = Intl.DateTimeFormat().resolvedOptions().timeZone;
      console.log(timezone, "timezone")
      try {
        const response = await fetch(`https://backend-timezone.onrender.com/info?timezone=${timezone}`);
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

    // setSelectedTimeslots((timeslot) => {
    //   const newtimeslot = { ...timeslot };
    //   newtimeslot[classid] = "Want Another Slot :" + event.target.value;
    //   return newtimeslot;
    // });
  };

  return (
    <div className="sub-cards-grid">
      <h1>Happy Exploring!</h1>
      <div>
        <div >
          {data.map((classes, index) => (
            <>
              <div
                className={index % 2 == 0 ? "sub-card" : "sub-card1"}
                id={props.scroll > 800 ? "animation" : ""}
              >
                <div className="class_card">
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
