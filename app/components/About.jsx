import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";

const About = () => {
  return (
    <div id="about" className="w-full px-4 sm:px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">Introduction</h4>
      <h2 className="text-center text-3xl sm:text-5xl">About Me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-10 sm:gap-20 my-10 sm:my-20">
        <div className="w-48 sm:w-64 md:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className=" rounded-3xl w-full"
          />
        </div>
        <div className="flex-1">
          <p className="mb-6 sm:mb-10 max-w-2xl text-sm sm:text-base">
            I am a motivated and dedicated learner with a strong passion for technology
            and problem-solving. I thrive in collaborative environments where I can
            exchange ideas, learn from others, and contribute to innovative solutions.
            Eager to apply my knowledge and gain hands-on experience, I am excited to
            learn and  work on real-world projects that help me to grow. My goal is to
            develop professionally in mobile development while continuously
            expanding my skills and learning from every opportunity.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-blue-100 hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={icon} alt={title} className="w-6 sm:w-7 mt-2 sm:mt-3" />
                <h3 className="my-2 sm:my-4 font-semibold text-gray-700 text-sm sm:text-base">{title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-4 sm:my-6 text-gray-700">Tools I use</h4>

          <ul className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-10 sm:w-12 md:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-6 md:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
