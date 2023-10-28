import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CardWrapper from "./Card/CardWrapper";
import "./MainPage.css";
import "./MobileView.css";
import ClassDetail from "./ClassDetail";
import DetailForm from "./DetailForm";
import Coral_Academy from "../assets/Coral_Academy.png";
import About_us from "../assets/About_us.png";
import Demo from "../assets/Demo.png";
import footer from "../assets/footer.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import click from "../assets/click.png";

const MainPage = () => {
  const [register, setRegister] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timedata, setTimedata] = useState({});
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

  const sendDataHandler = (data) => {
    console.log(data);
    setTimedata(data);
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

  return (
    <CardWrapper>
      
      {/* <h1> Coral Academy </h1>
      <h4> Demo Classes</h4> */}
      {/* {loading && (
        <div className="loaderClass">
          <Loader />
        </div>
      )} */}
      <div className="scrollClass" id="scrollClass1">
      
      <img className="title" src={Coral_Academy} alt="Title" />

      {!register && !submitted && (
        
        <div className="card1">
          <div className="bubbles">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
          <h1
            style={{
              marginBottom: "50px",
              marginTop: "20px",
              fontFamily: "urbanist",
            }}
          >
            {" "}
            Welcome to Demo Classes!
          </h1>

          <h5 className="message">
          Register for each learner separately. You can select as many classes under one learner.
          </h5>

          {/* <div className={scrollPosition >= 0 ? "enrollAnimation" : ""}>
            <h2>How To Enroll?</h2>
            <div className="thick_line"></div>
            <div className="guidance">
              <img src={icon1} alt="search"></img>
              <p>
                Explore
                <br /> Classes
              </p>
              <img src={icon2} id="next" alt="next"></img>
              <img src={icon3} alt="select"></img>
              <p>
                Select Time <br /> Slots*
              </p>
              <img src={icon2} id="next" alt="next"></img>
              <img src={click} alt="Click Continue" />
              <p>
                Click
                <br />
                Continue
              </p>
              <img src={icon2} id="next" alt="next"></img>
              <img src={icon4} alt="details"></img>
              <p>
                Fill <br /> Details!
              </p>
            </div>
            <div className="thin_line"></div>
            <span className="message">
             *Register for each Learner separately. Multiple Classes can be selected under one registration.
            </span>
          </div> */}

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
        />
      )}
      {!register && submitted && (
        <div className="submitpage">
          <p>
            Thanks for <br></br>submitting!
          </p>
          <button onClick={homePageHandler}>Add More Learner!</button>
        </div>
      )}

      {/* <div className="about">
        <div className="about_content">
          <h1> About Us!</h1>
          <p className="p1">
            Coral Academy is your partner in K-12 EdTech. We carefully select
            top educators to ensure impactful and engaging learning experiences.
            
          </p>
        </div>
        <div className="about_img">
          <img src={About_us} alt="About_US" />
        </div>
      </div> */}

      {/* <div className="demo">
        <div className="demo_content">
          <h1> Demo Classes</h1>
          <p className="p1">
            We're offering free, fun, and engaging demo classes with amazing
            teachers from various backgrounds. They'll be teaching a variety of
            interesting topics for the next two months.
          </p>
        </div>
        <div className="about_img1">
          <img src={Demo} alt="Demo Classes" />
        </div>
      </div> */}

      <div className="footer">
        <div className="footer_content">
          <p> Contact us at:</p>
          <a href="mailto:support@coralacademy.com">support@coralacademy.com</a>
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
