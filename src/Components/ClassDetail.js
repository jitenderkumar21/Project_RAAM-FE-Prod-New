import React, { useState } from "react";
import "./MainPage.css";
import Timeslot from "./Timeslot";
import "./ClassDetail.css"

const ClassDetail = () => {
  const data = [
    {
      id: 1,
      title: "Class 1",
      description: "this is class 1",
      tutor: "Ram Kumar",
      timeslots: [
        { slotid: 1, checked: false, value: "9:00 AM to 10:00 AM" },
        { slotid: 2, checked: false, value: "11:00 AM to 12:00 AM" },
        { slotid: 3, checked: false, value: "2:00 PM to 3:00 PM" },
        { slotid: 4, checked: false, value: "6:00 PM to 7:00 PM" },
      ],
    },
    {
      id: 2,
      title: "Class 2",
      description: "this is class 2",
      tutor: "Ram Kumar",
      timeslots: [
        { slotid: 1, checked: false, value: "9:00 AM to 10:00 AM" },
        { slotid: 2, checked: false, value: "11:00 AM to 12:00 AM" },
        { slotid: 3, checked: false, value: "2:00 PM to 3:00 PM" },
        { slotid: 4, checked: false, value: "6:00 PM to 7:00 PM" },
      ],
    },
    {
      id: 3,
      title: "Class 3",
      description: "this is class 3",
      tutor: "Ram Kumar",
      timeslots: [
        { slotid: 1, checked: false, value: "9:00 AM to 10:00 AM" },
        { slotid: 2, checked: false, value: "11:00 AM to 12:00 AM" },
        { slotid: 3, checked: false, value: "2:00 PM to 3:00 PM" },
        { slotid: 4, checked: false, value: "6:00 PM to 7:00 PM" },
      ],
    },
    {
      id: 4,
      title: "Class 4",
      description: "this is class 4",
      tutor: "Ram Kumar",
      timeslots: [
        { slotid: 1, checked: false, value: "9:00 AM to 10:00 AM" },
        { slotid: 2, checked: false, value: "11:00 AM to 12:00 AM" },
        { slotid: 3, checked: false, value: "2:00 PM to 3:00 PM" },
        { slotid: 4, checked: false, value: "6:00 PM to 7:00 PM" },
      ],
    },
  ];

  const transformedClasses = data.reduce((result, classItem) => {
    result[classItem.id] = [];
    return result;
  }, {});

  const [selectedTimeslots, setSelectedTimeslots] =
    useState(transformedClasses);

  const handleTimeslotSelection = (timeslotId, classid) => {

    if (selectedTimeslots[classid].includes(timeslotId)) {
        setSelectedTimeslots((prevSelectedTimeslots) => {
            const newstate = { ...prevSelectedTimeslots }
            newstate[classid] = newstate[classid].filter(
                (id) => id !== timeslotId
            );

            return newstate
        });
    
    } else {
      setSelectedTimeslots((prevSelectedTimeslots) => {
        const newstate = {...prevSelectedTimeslots}
        newstate[classid] = [...newstate[classid], timeslotId]
        return newstate
      }
      );
    }
  
  };
  console.log(selectedTimeslots);
  return (
    <div className="sub-cards-grid">
      {data.map((classes) => (
        <>
          <div className="sub-card">
            <h3>{classes.title}</h3>
            <p>{classes.description}</p>

            {classes.timeslots.map((timeslot) => (
              <Timeslot
                key={timeslot.slotid}
                classid={classes.id}
                timeslot={timeslot}
                isSelected={selectedTimeslots[classes.id].includes(timeslot.slotid)}
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
