import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-screen h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-13 mx-auto flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ml-3">
            About
          </p>
        </div>

        <p className="text-xl mt-20 px-8">
          Hi, I’m Namit Malasi, a front-end developer who is passionate about
          web technologies. I'm a self taught developer focused on creating
          beautiful and user friendly applications while writing clean code. I’m
          currently working on creating dynamic web Apps using
          React,Redux,Tailwind etc.
        </p>
        <br />
        <p className="text-xl px-8">
          I have experience in developing apps using technologies like
          HTML,CSS,JAVASCRIPT,REACT,REDUX and so on. My proof of work can be
          seen down below in projects section.
        </p>
      </div>
    </div>
  );
};

export default About;
