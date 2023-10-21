import React, { useEffect, useState } from "react";
import "./MainPage.css";
import Timeslot from "./Timeslot";
import "./ClassDetail.css";

const ClassDetail = (props) => {
  const data = [
    {
      id: 1,
      title: "Travel the World with Mr. Clark",
      description:
        "This ongoing class is dedicated to English speaking skills. 1:1 lessons with a highly experienced online English teacher. Learners will be guided through a conversation about topics they LOVE! (Dance, Sports, Crafts, Animals and MORE). During the 11 lesson the teacher will help learners speak in complete sentences while correcting grammar and pronunciation. They will also be introduced to new vocabulary and practice spelling!",
      about_teacher:
        "Hi! My name is Teacher Sarah and I live in upstate New York! I graduated from Southern Utah University with a Bachelors Degree in Dance Performance. I have been teaching children for over 20 years and love to make learning fun! I have been a ballet dancer since I was very young but also enjoy tap and jazz dance as well.",
      age_group: "8-13 yeaars old",
      duration: "50 minutes",
      expand: false,
      tutor: "Ram Kumar",
      timeslots: [
        "9:00 AM to 10:00 AM",
        "11:00 AM to 12:00 AM",
        "2:00 PM to 3:00 PM",
        "6:00 PM to 7:00 PM",
      ],
    },
    {
      id: 2,
      title: "Mind Gym: Working out With Logic Puzzles",
      description:
        "This ongoing class is dedicated to English speaking skills. 1:1 lessons with a highly experienced online English teacher. Learners will be guided through a conversation about topics they LOVE! (Dance, Sports, Crafts, Animals and MORE). During the 11 lesson the teacher will help learners speak in complete sentences while correcting grammar and pronunciation. They will also be introduced to new vocabulary and practice spelling!",
      about_teacher:
        "Hi! My name is Teacher Sarah and I live in upstate New York! I graduated from Southern Utah University with a Bachelors Degree in Dance Performance. I have been teaching children for over 20 years and love to make learning fun! I have been a ballet dancer since I was very young but also enjoy tap and jazz dance as well.",
      expand: false,
      age_group: "8-13 yeaars old",
      duration: "50 minutes",
      tutor: "Ram Kumar",
      timeslots: [
        "9:00 AM to 10:00 AM",
        "11:00 AM to 12:00 AM",
        "2:00 PM to 3:00 PM",
        "6:00 PM to 7:00 PM",
      ],
    },
    {
      id: 3,
      title: "Electoral College",
      description:
        "This ongoing class is dedicated to English speaking skills. 1:1 lessons with a highly experienced online English teacher. Learners will be guided through a conversation about topics they LOVE! (Dance, Sports, Crafts, Animals and MORE). During the 11 lesson the teacher will help learners speak in complete sentences while correcting grammar and pronunciation. They will also be introduced to new vocabulary and practice spelling!",
      about_teacher:
        "Hi! My name is Teacher Sarah and I live in upstate New York! I graduated from Southern Utah University with a Bachelors Degree in Dance Performance. I have been teaching children for over 20 years and love to make learning fun! I have been a ballet dancer since I was very young but also enjoy tap and jazz dance as well.",
      age_group: "8-13 yeaars old",
      expand: false,
      duration: "50 minutes",
      tutor: "Ram Kumar",
      timeslots: [
        "9:00 AM to 10:00 AM",
        "11:00 AM to 12:00 AM",
        "2:00 PM to 3:00 PM",
        "6:00 PM to 7:00 PM",
      ],
    },
  ];

  const transformedClasses = data.reduce((result, classItem) => {
    result[classItem.id] = "";
    return result;
  }, {});

  const [selectedTimeslots, setSelectedTimeslots] =
    useState(transformedClasses);

  const [expandedClassId, setExpandedClassId] = useState(null);

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
    const finalInfoArray = Object.keys(selectedTimeslots).map((classid) => {
      const timeslot = selectedTimeslots[classid]
      const classInfo = data.find((classInfo) => classInfo.id === parseInt(classid));
      const className = classInfo ? classInfo.title : "";
      return {
        classid,
        className,
        timeslot: timeslot || "",
      };
    })
    props.onSendData(finalInfoArray);
  }, [selectedTimeslots]);

  return (
    <div className="sub-cards-grid">
      {data.map((classes) => (
        <>
          <div className="sub-card">
            <h3>{classes.title}</h3>
            <p>Age Group : {classes.age_group}</p>
            <p>Duration : {classes.duration}</p>
            <h3> ABOUT THE CLASS</h3>

            {classes.id !== expandedClassId && (
              <p>{classes.description.substring(0, 100)} ....</p>
            )}

            {classes.id === expandedClassId && (
              <>
                <p>{classes.description}</p>
                <h3>ABOUT THE TEACHER</h3>
                <p>{classes.about_teacher}</p>
              </>
            )}
            <p></p>
            <button onClick={() => toggleDescription(classes.id)}>
              {expandedClassId === classes.id ? "Read Less.." : "Read More"}
            </button>
            <p></p>

            {classes.timeslots.map((timeslot) => (
              <Timeslot
                name={classes.title}
                classid={classes.id}
                timeslot={timeslot}
                isSelected={selectedTimeslots[classes.id] == timeslot}
                onSelect={handleTimeslotSelection}
              />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default ClassDetail;
