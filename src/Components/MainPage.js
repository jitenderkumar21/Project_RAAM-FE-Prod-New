import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Card, FormControl, FormLabel, TextField } from "@mui/material";
import CardWrapper from "./Card/CardWrapper";
import "./MainPage.css";
import ClassDetail from "./ClassDetail";
import DetailForm from "./DetailForm";

const MainPage = () => {
  const [register, setRegister] = useState(false);
  const registerHandler = () => {
    setRegister(true);
  };
  const submitHandler = () => {
    setRegister(false);
  };
  return (
    <CardWrapper>
      <h1> Caral Academy </h1>
      <p>
        Welcome to Our website. Here the courses for you. Please have a look and
        register.
      </p>
      {!register && (
        <div className="card1">
          <div >
            <ClassDetail />
          </div>
          
          <Button variant="contained" color="primary" className="button" onClick={registerHandler} >
            Register Here
          </Button>
        </div>
      )}
      {register && <DetailForm onSubmit={submitHandler} />}
    </CardWrapper>
  );
};

export default MainPage;
