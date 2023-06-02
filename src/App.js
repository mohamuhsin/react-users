import React, { useState } from "react";

import AddUser from "./components/User/AddUser";
import UsersList from "./components/UsersList/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (uName, uAge) => {
    setUsersList();
  };
  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
