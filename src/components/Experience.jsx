import React from "react";

import img1 from '../assets/html.png'
import img2 from "../assets/css.png";
import img3 from "../assets/javascript.png";
import img4 from "../assets/react.png";
import img5 from "../assets/nextjs.png";
import img6 from "../assets/graph.png";
import img7 from "../assets/github.png";
import img8 from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: img1,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: img2,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: img3,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: img4,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: img5,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 6,
      src: img6,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: img7,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: img8,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline mt-5">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;