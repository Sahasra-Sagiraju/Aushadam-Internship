import React from "react";
import CreatePasssword from "./components/CreatePassword";
import ConfirmPasssword from "./components/ConfirmPassword";
import "./styles/general.css";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <CreatePasssword />
      <ConfirmPasssword />
      <SignUp />
    </>
  );
}

export default App;
