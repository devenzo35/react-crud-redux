import { useState } from "react";
import UsersList from "./components/UsersList.jsx";
import AddUserForm from "./components/AddUserForm.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UsersList />
      <AddUserForm />
    </>
  );
}

export default App;
