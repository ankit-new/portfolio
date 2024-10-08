import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col h-full justify-center">
        <p className="text-pink-600">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ankit Sharma
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a software engineer at Exlitem India formely known as Offshore
          Research Partners, currently serving as a Vue.js developer in the
          project. In this role, I am responsible for implementing the user
          interface and functionality using Vue.js, a popular JavaScript
          framework.I am skilled in HTML, CSS,Javascript ,Vuetify, Vue. js ,
          React js and also eager to explore different frontend technologies.
        </p>
        <div>
         <Link to="work" smooth={true} duration={500}> 
            <button className="text-white group border-2 px-3 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 ">
              View Work
              <span className="group-hover:rotate-90 duration-300 ">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
