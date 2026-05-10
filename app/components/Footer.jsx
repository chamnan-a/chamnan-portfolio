import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <div className="w-full flex flex-col sm:flex-row items-center gap-2 justify-center px-4">
          <Image src={assets.mail_icon} alt="" className="w-6 sm:w-8" />
          <span className="text-sm sm:text-lg break-all text-center">chamnankheng231@gmail.com</span>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p> 2026 Kheng Chamnan. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/chamnan-a">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/%E1%9E%81%E1%9F%81%E1%9E%84-%E1%9E%85%E1%9F%86%E1%9E%8E%E1%9E%B6%E1%9E%93-00b49b353/">
              LinkIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
