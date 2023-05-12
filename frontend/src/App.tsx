import React from "react";

import "./App.css";
import Allroutes from "./routes/Allroutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <Navbar />
      <Allroutes />
    </h1>
  );
}

export default App;
