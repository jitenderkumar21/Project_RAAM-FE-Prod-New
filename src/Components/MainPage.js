import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CardWrapper from "./Card/CardWrapper";
import "./MainPage.css";
import "./MobileView.css";
import ClassDetail from "./ClassDetail";
import DetailForm from "./DetailForm";
import Coral_Academy from "../assets/Coral_Academy.png";
import About_us from "../assets/About_us.png";

const MainPage = () => {
  const [register, setRegister] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timedata, setTimedata] = useState({});
  const [anotherSlot, setAnotherSlot] = useState({});
  const [fulldata, setFullData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSelected, setIsSelected] = useState(0);


  useEffect(() => {
    const clearLocalStorageOnReload = () => {
      localStorage.clear();
    };

    window.addEventListener('beforeunload', clearLocalStorageOnReload);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('beforeunload', clearLocalStorageOnReload);
    };
  }, []);

  const registerHandler = () => {
    setRegister(true);
    setScrollPosition(0);
  };
  const submitHandler = () => {
    setRegister(false);
    setSubmitted(true);
  };

  const sendDataHandler = (data ,value) => {
    console.log(data, value, "kfkfkfkkdk");
    setTimedata(data);
    setAnotherSlot(value);
  };

  const backPageHandler = () => {
    setRegister(false);
    setScrollPosition(1000);
  };

  const homePageHandler = () => {
    setSubmitted(false);
  };

  const continueButtonHandler = (len) => {
    if (len === 0) {
      setIsSelected(0);
    } else {
      setIsSelected(len);
    }
  };

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      console.log("shd");
      try {
        const response = await fetch(
          "https://backend-z29v.onrender.com/classes/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setFullData(jsonData);
        // setLoading(false);
      } catch (err) {
        console.log("Error");
        // setLoading(false);
      }
    };

    fetchData();
  }, [submitted]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let fullclasses = fulldata.reduce((acc, item) => {
    if (item.slots.some((slot) => slot.isFull)) {
      acc[item.class_id] = item.slots
        .filter((slot) => slot.isFull)
        .map((slot) => slot.slot);
    }
    return acc;
  }, {});

  // console.log(fullclasses, "fullclasses")

  return (
    <CardWrapper>
      <div className="scrollClass" id="scrollClass1">
        <div className="header">
          <h3>Free Classes! For Limited Time Only!</h3>
        </div>
      
      
      <img className="title" src={Coral_Academy} alt="Title" />

      {!register && !submitted && (
        
        <div className="card1">
          <h1
            style={{
              marginBottom: "50px",
              marginTop: "20px",
              fontFamily: "urbanist",
            }}
          >
            {" "}
            Sparking a Love for Learning!
          </h1>

          <h5 className="message">
          Register for each learner separately. You can select multiple classes for each learner.
          </h5>


          <div>
            <ClassDetail
              onSendData={sendDataHandler}
              onSelectTimeSlot={continueButtonHandler}
              fullclass={fullclasses}
              scroll={scrollPosition}
            />
          </div>
          <div className="register_button">
            {isSelected ? (
              <Button
                id="continue"
                variant="contained"
                color="primary"
                className="button"
                onClick={registerHandler}
              >
                Continue
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                className="button"
                disabled
                onClick={registerHandler}
              >
                Continue
              </Button>
            )}
          </div>
        </div>
      )}
      {register && !submitted && (
        <DetailForm
          onSubmit={submitHandler}
          onBack={backPageHandler}
          timedata={timedata}
          anotherSlot={anotherSlot}
        />
      )}
      {!register && submitted && (
        <div className="submitpage">
          <p>
          Welcome aboard! We've sent you all the class details via email.
          <br></br> Thanks for picking Coral Academy – let the learning adventure begin!
          </p>
          <button onClick={homePageHandler}>Add Learner!</button>
        </div>
      )}

      <div className="footer">
        <div className="footer_content">
          <p> Contact us at:</p>
          <a href="mailto:support@coralacademy.com">support@coralacademy.com</a>
          <p> Please share in detail how we can improve your overall experience <a href="https://docs.google.com/forms/d/e/1FAIpQLSflsLJJuG74V1jjS29B-R1TVPbD74e9H5CkKVQMX6CzM87AZQ/viewform?usp=sf_link" target="_blank">here</a>.
          </p>
          
        </div>
        <div className="about_img">
          <img src={About_us} alt="About_US" />
        </div>
      </div>
      </div>
    </CardWrapper>
  );
};

export default MainPage;
