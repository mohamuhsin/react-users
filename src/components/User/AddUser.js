import React, { useState } from "react";

import Card from "../Card/Card";
import classes from "./AddUser.module.css";
import Button from "../Button/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const AddUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredAge, enteredUsername);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);

    const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
    };

    return (
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={usernameChangeHandler} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" onChange={ageChangeHandler} />
          <Button type="sumit"> Add User</Button>
        </form>
      </Card>
    );
  };
};

export default AddUser;
