import { useState } from "react";
import UserContextProvider from "./context/UserContextProvider";
import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <>
      <UserContextProvider>
        <Profile />
        <Login />
      </UserContextProvider>
    </>
  );
}

export default App;
