import React, { useState } from "react";

import AddUser from "./components/User/AddUser";
import UsersList from "./components/UsersList/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
