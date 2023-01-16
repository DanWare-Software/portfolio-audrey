import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-[1000px] p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>


        <br />

        <p className="text-xl mb-10">
        My primary reason for wanting to join the SovTech graduate program is because after in-depth research of what SovTech does, I’m filled with so much excitement! Being given the opportunity to work at a #Wordclass software company would be a privilege. I #GiveAShit about working in a flexible and fluid environment that is filled with opportunities to explore different avenues and roles, I feel SovTech is one such place. Below is a brief overview of some of the skills i possess that would be valuable to SovTech
        </p>
      </div>
    </div>
  );
};

export default About;