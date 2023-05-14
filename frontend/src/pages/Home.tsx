// import { useState } from 'react'
import image from "./yoga.jpg";

// export default function Home() {

//   return (
//       <img src={image} className="w-full h-auto" alt="Image" />
//   )
// }

import React from "react";
// import "./styles.css"; // Import the CSS file for styling
import Timer from "../components/Timer";

const Home: React.FC = () => {
  return (
    <div className="relative">
      <img src={image} alt="Background Image" className="w-full h-auto" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-transparent ">
        {/* Your component goes here */}

        <div className="bg-black  bg-green-200  p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl ">Component Content</h2>
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default Home;
