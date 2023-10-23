import React, { useEffect, useState } from "react";
import "./MainPage.css";
import Timeslot from "./Timeslot";
import "./ClassDetail.css";
import age from "../assets/age.png";
import duration from "../assets/duration.png";
import teacher from "../assets/teacher.png";
import dropIcon from "../assets/dropdown.png";
import instructor from "../assets/instructor.png";
import closeDropDown from "../assets/closeDropdown.png";
const ClassDetail = (props) => {
  const data = [
    {
      id: 1,
      title: "Travel the World with Mr. Clark",
      class_details:
        "To improve our understanding of different cultures around the world, including their histories, geography, culinary culture, music and dance. To learn and comprehend the life lessons the stories contain, and to improve vocabulary",
      prerequisite:
        "There are no materials needed, however, you may choose to download and print the blank letter of the day sheet to decor",
      learning_outcomes:
        "To improve our understanding of different cultures around the world, including their history and geography and everything!",

      about_teacher:
        "Hello! I'm Sorrel. I'm deeply passionate about the intricate tapestry of Myths, Legends, Philosophy, and the intricacies of the human psyche. With a Master's in Psychology and a Bachelor's in Philosophy and History, I've always approached teaching with a twist. My aim? To kindle curiosity and hone the analytical prowess of young minds.",
      teaching_philosophy:
        "To improve our understanding of different cultures around the world, including their histories.",
      teacher_pic: instructor,
      age_group: "8-13 years old",
      duration: "50 minutes",
      expand: false,
      link: "https://static.wixstatic.com/media/27d523f50e781626c04fc109dd313241.jpg/v1/crop/x_101,y_0,w_406,h_306/fill/w_214,h_161,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Geography%20Lesson.jpg",
      tutor: "Misses Dee",
      timeslots: [
        "1 Nov, 6 PM - 7 PM (PST)",
        "2 Nov, 6 PM - 7 PM (PST)",
        "Want another slot",
      ],
    },
    {
      id: 2,
      title: "Mind Gym: Working out With Logic Puzzles",
      class_details:
        "To improve our understanding of different cultures around the world, including their histories, geography, culinary culture, music and dance. To learn and comprehend the life lessons the stories contain, and to improve vocabulary",
      prerequisite:
        "There are no materials needed, however, you may choose to download and print the blank letter of the day sheet to decor",
      learning_outcomes:
        "To improve our understanding of different cultures around the world, including their history and geography and everything!",

      about_teacher:
        "Hello! I'm Sorrel. I'm deeply passionate about the intricate tapestry of Myths, Legends, Philosophy, and the intricacies of the human psyche. With a Master's in Psychology and a Bachelor's in Philosophy and History, I've always approached teaching with a twist. My aim? To kindle curiosity and hone the analytical prowess of young minds.",
      teaching_philosophy:
        "To improve our understanding of different cultures around the world, including their histories.",
      expand: false,
      teacher_pic: instructor,
      age_group: "8-13 years old",
      duration: "50 minutes",
      link: "https://static.wixstatic.com/media/11062b_54cb26d9ed2049d9a1a6259e29ef373d~mv2_d_5251_3501_s_4_2.jpg/v1/crop/x_314,y_0,w_4623,h_3501/fill/w_216,h_164,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Playing%20with%20Toy%20Vehicles.jpg",
      tutor: "Vyshali",
      timeslots: [
        "1 Nov, 6 PM - 7 PM (PST)",
        "2 Nov, 6 PM - 7 PM (PST)",
        "Want another slot",
      ],
    },
    {
      id: 3,
      title: "Electoral College",
      class_details:
        "To improve our understanding of different cultures around the world, including their histories, geography, culinary culture, music and dance. To learn and comprehend the life lessons the stories contain, and to improve vocabulary",
      prerequisite:
        "There are no materials needed, however, you may choose to download and print the blank letter of the day sheet to decor",
      learning_outcomes:
        "To improve our understanding of different cultures around the world, including their history and geography and everything!",

      about_teacher:
        "Hello! I'm Sorrel. I'm deeply passionate about the intricate tapestry of Myths, Legends, Philosophy, and the intricacies of the human psyche. With a Master's in Psychology and a Bachelor's in Philosophy and History, I've always approached teaching with a twist. My aim? To kindle curiosity and hone the analytical prowess of young minds.",
      teaching_philosophy:
        "To improve our understanding of different cultures around the world, including their histories.",
      teacher_pic: instructor,
      age_group: "8-13 years old",
      expand: false,
      duration: "50 minutes",
      link: "https://static.wixstatic.com/media/11062b_fb6986eb84c14649b94d523c1f2eac5b~mv2.jpg/v1/crop/x_237,y_0,w_3526,h_2670/fill/w_216,h_164,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/College%20Campus.jpg",
      tutor: "Shagun",
      timeslots: [
        "1 Nov, 6 PM - 7 PM (PST)",
        "2 Nov, 6 PM - 7 PM (PST)",
        "Want another slot",
      ],
    },
    {
      id: 4,
      title: "Electoral College",
      class_details:
        "To improve our understanding of different cultures around the world, including their histories, geography, culinary culture, music and dance. To learn and comprehend the life lessons the stories contain, and to improve vocabulary",
      prerequisite:
        "There are no materials needed, however, you may choose to download and print the blank letter of the day sheet to decor",
      learning_outcomes:
        "To improve our understanding of different cultures around the world, including their history and geography and everything!",

      about_teacher:
        "Hello! I'm Sorrel. I'm deeply passionate about the intricate tapestry of Myths, Legends, Philosophy, and the intricacies of the human psyche. With a Master's in Psychology and a Bachelor's in Philosophy and History, I've always approached teaching with a twist. My aim? To kindle curiosity and hone the analytical prowess of young minds.",
      teaching_philosophy:
        "To improve our understanding of different cultures around the world, including their histories.",
      age_group: "8-13 yeaars old",
      teacher_pic: instructor,
      expand: false,
      duration: "50 minutes",
      link: "https://static.wixstatic.com/media/11062b_fb6986eb84c14649b94d523c1f2eac5b~mv2.jpg/v1/crop/x_237,y_0,w_3526,h_2670/fill/w_216,h_164,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/College%20Campus.jpg",
      tutor: "Ram Kumar",
      timeslots: [
        "1 Nov, 6 PM - 7 PM (PST)",
        "2 Nov, 6 PM - 7 PM (PST)",
        "Want another slot",
      ],
    },
    {
      id: 5,
      title: "Electoral College",
      class_details:
        "To improve our understanding of different cultures around the world, including their histories, geography, culinary culture, music and dance. To learn and comprehend the life lessons the stories contain, and to improve vocabulary",
      prerequisite:
        "There are no materials needed, however, you may choose to download and print the blank letter of the day sheet to decor",
      learning_outcomes:
        "To improve our understanding of different cultures around the world, including their history and geography and everything!",

      about_teacher:
        "Hello! I'm Sorrel. I'm deeply passionate about the intricate tapestry of Myths, Legends, Philosophy, and the intricacies of the human psyche. With a Master's in Psychology and a Bachelor's in Philosophy and History, I've always approached teaching with a twist. My aim? To kindle curiosity and hone the analytical prowess of young minds.",
      teaching_philosophy:
        "To improve our understanding of different cultures around the world, including their histories.",
      age_group: "8-13 years old",
      teacher_pic: instructor,
      expand: false,
      duration: "50 minutes",
      link: "https://static.wixstatic.com/media/11062b_fb6986eb84c14649b94d523c1f2eac5b~mv2.jpg/v1/crop/x_237,y_0,w_3526,h_2670/fill/w_216,h_164,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/College%20Campus.jpg",
      tutor: "Ram Kumar",
      timeslots: [
        "1 Nov, 6 PM - 7 PM (PST)",
        "2 Nov, 6 PM - 7 PM (PST)",
        "Want another slot",
      ],
    },
  ];
  console.log(props.fullclass, "props data");
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

  const [expandedClassId, setExpandedClassId] = useState(null);
  const [selectedTimeslots, setSelectedTimeslots] = useState(initial_state);

  useEffect(() => {
    localStorage.setItem(
      "selectedTimeSlots",
      JSON.stringify(selectedTimeslots)
    );
  }, [selectedTimeslots]);

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
  };

  useEffect(() => {
    const resultArray = Object.keys(selectedTimeslots).map((classid) => {
      const timeslot = selectedTimeslots[classid];
      const classInfo = data.find(
        (classInfo) => classInfo.id === parseInt(classid)
      );
      const className = classInfo ? classInfo.title : "";

      return {
        classid,
        className,
        timeslot: timeslot || "",
      };
    });
    props.onSendData(resultArray);
  }, [selectedTimeslots]);

  return (
    <div className="sub-cards-grid">
      <h1>Happy Exploring!</h1>
      <div className="scrollClass" id="scrollClass1">
        {data.map((classes, index) => (
          <>
            <div
              className={index % 2 == 0 ? "sub-card" : "sub-card1"}
              onClick={() => toggleDescription(classes.id)}
            >
              <div className="class_card">
                <div className="class_card1">
                  <img src={classes.link}></img>
                </div>
                <div className="class_card2">
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
                  {classes.timeslots.map((timeslot) => (
                    <Timeslot
                      name={classes.title}
                      classid={classes.id}
                      timeslot={timeslot}
                      full={
                        newfulldata[classes.id]
                          ? newfulldata[classes.id].includes(timeslot)
                          : false
                      }
                      isSelected={selectedTimeslots[classes.id] == timeslot}
                      onSelect={handleTimeslotSelection}
                    />
                  ))}
                </div>
              </div>
              <div className="class_footer">
                <p>
                  Description
                  {expandedClassId != classes.id && (
                    <img src={dropIcon} alt="dropDown" className="icon" />
                  )}
                  {expandedClassId == classes.id && (
                    <img src={closeDropDown} alt="dropDown" className="icon" />
                  )}
                </p>

                {classes.id === expandedClassId && (
                  <>
                    <h3>ABOUT THE CLASS</h3>

                    <h5>Class Details</h5>
                    <p className="description">{classes.class_details}</p>
                    <h5>Prerequisite</h5>
                    <p className="description">{classes.prerequisite}</p>
                    <h5>Learning Outcomes</h5>
                    <p className="description">{classes.learning_outcomes}</p>

                    <h3>MEET YOUR TEACHER</h3>
                    <div className="about_teacher">
                      <img src={classes.teacher_pic}></img>
                      <div>
                        <p className="description">{classes.about_teacher}</p>
                        <h5>Teaching Philosophy</h5>
                        <p className="description">
                          {classes.teaching_philosophy}
                        </p>
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

export default ClassDetail;
