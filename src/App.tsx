import { useState } from "react";
import UsersList from "./components/UsersList.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UsersList />
    </>
  );
}

export default App;
