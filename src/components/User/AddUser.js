import React from "react";
import Card from "../Card/Card";
import classes from "./AddUser.module.css";
import Button from "../Button/Button";

const AddUser = (props) => {
  const AddUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" />
        <Button type="sumit"> Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
