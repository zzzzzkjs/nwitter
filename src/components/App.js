import React, { useState } from "react";
import AppRouter from "./Router.js";
import firebase from "../firebase.js";

console.log(firebase);
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter </footer>
    </>
  );
}

export default App;
