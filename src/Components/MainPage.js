import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CardWrapper from "./Card/CardWrapper";
import "./MainPage.css";
import "./MobileView.css";
import ClassDetail from "./ClassDetail";
import DetailForm from "./DetailForm";
import Coral_Academy from "../assets/Coral_Academy.png";
import thank_you from "../assets/thank_you.png";
import final_page from "../assets/final_page.png";
import scrollToTop from "./utils/scrollToTop";
import Footer from "./Footer";

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
    window.addEventListener("beforeunload", clearLocalStorageOnReload);

    return () => {
      window.removeEventListener("beforeunload", clearLocalStorageOnReload);
    };
  }, []);
  const quickCallHandler = () => {
    window.open("https://tinyurl.com/CoralAcademy-15min", "_blank");
  };
  const registerHandler = () => {
    setRegister(true);
    scrollToTop();
  };
  const submitHandler = () => {
    setRegister(false);
    setSubmitted(true);
    scrollToTop();
  };

  const sendDataHandler = (data, value) => {
    setTimedata(data);
    setAnotherSlot(value);
    console.log(data, "timedata");
  };

  const backPageHandler = () => {
    setRegister(false);
    scrollToTop();
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
  const continueHandler = (slot_value) => {
    if (slot_value) {
      setIsSelected(slot_value);
    }
  };

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKENDURL}classes/`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setFullData(jsonData);
        // setLoading(false);
      } catch (err) {
        // setLoading(false);
      }
    };

    fetchData();
  }, [submitted]);

  return (
    <CardWrapper>
      <div className="scrollClass" id="scrollClass1">
        <div className="header">
          <h3>Free Classes! For Limited Time Only!</h3>
        </div>

        {!register && !submitted && (
          <img className="title" src={Coral_Academy} alt="Title" />
        )}

        {!register && !submitted && (
          <div className="card1">
            <h1
              style={{
                marginBottom: "50px",
                marginTop: "20px",
                fontFamily: "urbanist",
              }}
            >
              Sparking a Love for Learning!
            </h1>

            <h5 className="message">
              Register for each learner separately. You can select multiple
              classes for each learner.
            </h5>

            <div>
              <ClassDetail
                onSendData={sendDataHandler}
                onSelectTimeSlot={continueButtonHandler}
                onWantAnotherSlot={continueHandler}
                fullclass={fulldata}
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
            {window.innerWidth > 599 ? (
              <img alt="image" src={thank_you}></img>
            ) : (
              <img alt="image" src={final_page}></img>
            )}
            <p className="final_page_header">Welcome Aboard!</p>
            <p className="final_page_description">
              We've sent you all the class details via email.
            </p>
            <div className="submitpage_content">
              <div className="add_learner">
                <p>
                  Want to add another child? <br></br>
                  Register again!
                </p>
                <button onClick={homePageHandler} id="add_learner">
                  Add Learner
                </button>
              </div>

              <div className="quickcall">
                <p>
                  Help us personalize your <br></br> child's learning!
                </p>
                <button onClick={quickCallHandler} id="quick_call">
                  Quick Call
                </button>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </CardWrapper>
  );
};

export default MainPage;
