import React, { useEffect, useRef, useState } from "react";
import "./MainPage.css";
import "./MobileView.css";
import "./ClassDetail.css";
import AgeFilterDropdown from "./AgeSelection";
import DownIcon from "../assets/down.png";
import UpIcon from "../assets/up.png";
import ClassCard from "./ClassCard";
const ClassDetail = (props) => {
  const wantmore = localStorage.getItem("wantMore");
  let want_more_state = "";
  if (wantmore) {
    want_more_state = wantmore;
  }
  const [data, setData] = useState([]);
  const [value, setValue] = useState(want_more_state);
  const buttonRef = useRef(null);

   const handleWantnewslot = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("wantMore", value);
  }, [value]);

  useEffect(() => {
    const fetchClassData = async () => {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      try {
        const response = await fetch(
          `https://backend-z29v.onrender.com/info?timezone=${timezone}`
        );
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
    result[classItem.id] = [];
    return result;
  }, {});

  const [newfulldata, setNewFullData] = useState({});

  useEffect(() => {
    if (Object.keys(props.fullclass).length > 0) {
      setNewFullData(props.fullclass);
    }
  }, [props.fullclass]);

  const storedSelections = localStorage.getItem("selectedTimeSlots");
  let initial_state = [];
  if (storedSelections) {
    initial_state = JSON.parse(storedSelections);
    
    for (const key in initial_state) {
      const value = initial_state[key];
      console.log(typeof(value), value)
      if (typeof(value) !== "object"){
        localStorage.clear()
        initial_state = transformedClasses
      } 
    }
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
  const [isActive, setIsActive] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedAges, setSelectedAges] = useState(null);
  const [isDropDown, setIsDropDown] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "selectedTimeSlots",
      JSON.stringify(selectedTimeslots)
    );
  }, [selectedTimeslots]);

  useEffect(() => {
    if (data.length != 0) {
      localStorage.setItem("data", JSON.stringify(data));
    }
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

  const handleTimeslotSelection = (classid, timeslotObj) => {
    setSelectedTimeslots((prevSelectedTimeSlots) => {
      const updatedSelection = { ...prevSelectedTimeSlots };
      if (updatedSelection[classid]) {
        const index = updatedSelection[classid].findIndex(
          (obj) => obj.subClassId === timeslotObj.subClassId
        );

        if (index !== -1) {
          updatedSelection[classid].splice(index, 1);
          if (updatedSelection[classid].length === 0) {
            delete updatedSelection[classid];
          }
        } else {
          updatedSelection[classid].push(timeslotObj);
        }
      } else {
        updatedSelection[classid] = [timeslotObj];
      }

      return updatedSelection;
    });
  };

  const liveClassHandler = () => {
    setIsActive(true);
  };

  const pastClassHandler = () => {
    setIsActive(false);
  };

  useEffect(() => {
    filterClasses();
  }, [selectedAges, isActive]);

  const filterClasses = () => {
    const filtered = data.filter((cls) => {
      const age_group = cls.age_group.replace(/ /g, "");
      const age_range = age_group.split("year")[0];
      const [startAge, endAge] = age_range.split("-").map(Number);
      const selectedClasses =
        selectedAges >= startAge && selectedAges <= endAge;
      if (selectedAges) {
        return selectedClasses;
      } else {
        return true;
      }
    });

    const timeFiltered = isActive
      ? filtered.filter((cls) => !cls.isMoveToPast)
      : filtered.filter((cls) => cls.isMoveToPast);

    setFilteredData(timeFiltered);
  };

  const handleAgeSelect = (age) => {
    setSelectedAges(selectedAges === age ? null : age);
    if (selectedAges !== age) {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    setFilteredData(data.filter((cls) => !cls.isMoveToPast));
  }, [data]);

  useEffect(() => {
    const resultArray = Object.keys(selectedTimeslots).map((classid) => {
      // console.log(selectedTimeslots, "in the send data funtuon");
      let timeslot = selectedTimeslots[classid];
      if (timeslot === "Want another slot") {
        timeslot = moreslots[classid];
      }
      let classInfo = data.find((classInfo) => classInfo.id === classid);
      let final_data = [];

      if (!classInfo) {
        const new_data = localStorage.getItem("data");
        final_data = JSON.parse(new_data);
        classInfo = final_data.find((classInfo) => classInfo.id === classid);
      }

      const className = classInfo ? classInfo.title : "ClassName";
      const classTag = classInfo ? classInfo.class_tag : "onetime";
      if (classTag?.toLowerCase() === "course" && classInfo) {
        timeslot = classInfo.timeslots;
      }

      return {
        classid,
        className,
        classTag,
        timeslots: timeslot || "",
      };
    });

    // const newArray = resultArray.map((obj) => obj[className] = data.find[cla])

    props.onSendData(resultArray, value);
    // console.log(resultArray, "selcted");
    props.onSelectTimeSlot(Object.keys(selectedTimeslots).length);
    props.onWantAnotherSlot(value)
  }, [selectedTimeslots, moreslots, value]);

  const requiredTimeslotHandler = (classid, event) => {
    setMoreSlots((moreslot) => {
      const newslot = { ...moreslot };
      newslot[classid] = "Want another Slot:" + event.target.value;
      return newslot;
    });
  };

  const dropdownHandler = () => {
    setIsDropDown((prevstate) => !prevstate);
  };

  const handleOutsideClick = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="sub-cards-grid">
      <h1>Happy Exploring</h1>
      <div className="filter-div">
        <div className="firstfilter" ref={buttonRef}>
          {selectedAges && (
            <button
              onClick={dropdownHandler}
              className="dropdown-toggle"
              type="button"
              id="ageFilterDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Learner's Age : {selectedAges}
            </button>
          )}

          {!selectedAges && (
            <button
              onClick={dropdownHandler}
              className="dropdown-toggle"
              type="button"
              id="ageFilterDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Learner's Age
              {isDropDown ? (
                <img src={UpIcon} alt="upicon" className="icon" />
              ) : (
                <img src={DownIcon} alt="dropDown" className="icon" />
              )}
            </button>
          )}

          {isDropDown && (
            <AgeFilterDropdown
              selected={selectedAges}
              onSelect={handleAgeSelect}
            />
          )}
        </div>
        <div className="tab-style">
          <p
            id="live_class"
            className={isActive ? "underlined-text" : "text"}
            onClick={liveClassHandler}
          >
            Live classes
          </p>
          <p
            id="past_class"
            className={!isActive ? "underlined-text" : "text"}
            onClick={pastClassHandler}
          >
            Past classes
          </p>
        </div>
      </div>

      {isActive && (
        <>
          {filteredData.filter(
            (cls) => cls.class_tag?.toLowerCase() === "course"
          ).length ? (
            <div className="abc">
              <p className="tag">Courses</p>
              <p className="data">
                Multiple sessions organized into a structured curriculum.
                Learners are expected to attend all classes throughout the
                course, as each class builds on the last one.
              </p>
            </div>
          ):<></>}
          <ClassCard
            filteredData={filteredData.filter(
              (cls) => cls.class_tag?.toLowerCase() === "course"
            )}
            newfulldata={newfulldata}
            onToggle={toggleDescription}
            selectedTimeslots={selectedTimeslots}
            onSelect={handleTimeslotSelection}
            moreslots={moreslots}
            onTimeslotHandler={requiredTimeslotHandler}
            expandedClassId={expandedClassId}
          ></ClassCard>

          
          {filteredData.filter(
            (cls) => cls.class_tag?.toLowerCase() === "ongoing"
          ).length ? (
            <div className="abc">
              <p
                className="tag"
                style={{ backgroundColor: "rgba(175,88,174,255)" }}
              >
                Ongoing
              </p>
              <p className="data">
                Versatile classes that follow a theme, but do not build on one
                another. Each class stands alone, providing the opportunity for
                learners to join at any time.
              </p>
            </div>
          ):<></>}
          <ClassCard
            filteredData={filteredData.filter(
              (cls) => cls.class_tag?.toLowerCase() === "ongoing"
            )}
            newfulldata={newfulldata}
            onToggle={toggleDescription}
            selectedTimeslots={selectedTimeslots}
            onSelect={handleTimeslotSelection}
            moreslots={moreslots}
            onTimeslotHandler={requiredTimeslotHandler}
            expandedClassId={expandedClassId}
          ></ClassCard>


          {filteredData.filter(
            (cls) => cls.class_tag?.toLowerCase() === "onetime"
          ).length ? (
            <div className="abc">
              <p
                className="tag"
                style={{ backgroundColor: "rgba(249,98,115,255)" }}
              >
                Onetime
              </p>
              <p className="data">
                Standalone classes that cover specific topics or skills in one
                session.
              </p>
            </div>
          ):<></>}
          <ClassCard
            filteredData={filteredData.filter(
              (cls) => cls.class_tag?.toLowerCase() === "onetime"
            )}
            newfulldata={newfulldata}
            onToggle={toggleDescription}
            selectedTimeslots={selectedTimeslots}
            onSelect={handleTimeslotSelection}
            moreslots={moreslots}
            onTimeslotHandler={requiredTimeslotHandler}
            expandedClassId={expandedClassId}
          ></ClassCard>
        </>
      )}

      {!isActive && (
        <ClassCard
          filteredData={filteredData}
          newfulldata={newfulldata}
          onToggle={toggleDescription}
          selectedTimeslots={selectedTimeslots}
          onSelect={handleTimeslotSelection}
          moreslots={moreslots}
          onTimeslotHandler={requiredTimeslotHandler}
          expandedClassId={expandedClassId}
        ></ClassCard>
      )}
      <div className="textbox">
        <textarea
          className="editable-textbox"
          value={value}
          onChange={handleWantnewslot}
          placeholder="Eg: Logic Club-Weekend evenings, Game theory-Wed 6-8 PM EST"
        ></textarea>
        <p>
          Don't see what you're looking for? Request for preferred classes & time slots here
        </p>
      </div>
    </div>
  );
};

export default ClassDetail;
