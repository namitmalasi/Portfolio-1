import React from "react";
import codebook from "../assets/portfolio/codebook.png";
import cryptoN from "../assets/portfolio/cryptoN.png";
import quizio from "../assets/portfolio/quizio.png";
import portfolio from "../assets/portfolio/portfolio.png";
import bazaar from "../assets/portfolio/bazaar.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: bazaar,
      live: "https://bazaar-ui.netlify.app/",
      code: "https://github.com/namitmalasi/Bazaar",
    },
    {
      id: 2,
      src: cryptoN,
      live: "https://app-crypton.netlify.app/",
      code: "https://github.com/namitmalasi/crypto-app",
    },
    {
      id: 3,
      src: quizio,
      live: "https://quizio-app.netlify.app/",
      code: "https://github.com/namitmalasi/react-quiz",
    },
    {
      id: 4,
      src: codebook,
      live: "https://codebook-ui.netlify.app/",
      code: "https://github.com/namitmalasi/codebook",
    },
    {
      id: 5,
      src: portfolio,
      live: "https://namitmalasi-portfolio.netlify.app/",
      code: "https://github.com/namitmalasi/Portfolio-1",
    },
  ];
  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen lg:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, live, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 cover"
              />
              <div className="flex items-center justify-center">
                <a href={live} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Live
                  </button>
                </a>

                <a href={code} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
