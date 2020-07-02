import React from "react";
import Admin from "./Pages/Admin";
import SingIn from "./Pages/Admin/SingIn";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import "./App.scss";

function App() {
  return (
    <div>
      <h1>App.js</h1>
      <Home />
      <Contact />
      <Admin />
      <SingIn />
    </div>
  );
}

export default App;
