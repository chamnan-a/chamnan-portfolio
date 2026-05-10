"use client";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    // If project has a direct Link, navigate to it
    if (project.Link) {
      window.open(project.Link, '_blank');
      return;
    }
    // If project has multiple links, show popup
    if (project.links && project.links.length > 0) {
      setSelectedProject(project);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">My Portfolio</h4>
      <h2 className="text-center text-5xl">My Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Welcome to my Portfolio! Explore a collection of projects showcasting my
        expertise .
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-video bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden"
            style={{ backgroundImage: `url(${project.bgImage})` }}
            onClick={() => handleProjectClick(project)}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-sm w-full mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              {selectedProject.title}
            </h3>
            <div className="flex flex-col gap-3">
              {selectedProject.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-blue-100 transition duration-300"
                >
                  <span className="font-medium text-gray-700">{link.label}</span>
                  <Image
                    src={assets.right_arrow_bold}
                    alt="arrow"
                    className="w-4"
                  />
                </a>
              ))}
            </div>
            <button
              onClick={closeModal}
              className="mt-4 w-full py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-300 font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-200 duration-500"
      >
        Show More
        <Image
          src={assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </a>
    </div>
  );
};

export default Work;
