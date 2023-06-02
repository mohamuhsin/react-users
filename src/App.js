import AddUser from "./components/User/AddUser";
import UsersList from "./components/UsersList/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
