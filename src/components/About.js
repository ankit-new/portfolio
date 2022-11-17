import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Ankit Sharma, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I like to build website that can be helpful to people around me. I
              am specialized in building website using new web development tools
              I like to build attravtive and responsive UI. That's preety much
              it about me You can also check some of my work through my github
              you can acces to my github repositories by clicking the github
              icon above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
