import React from "react";
import Image from "next/image";

const Section = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around min-h-screen py-8">
      <div className="mb-8 md:mb-0">
        <Image
          src="/images/waqas3.png"
          alt="My Image"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
      <div className="p-4 relative z-10 lg:ms-10 md:ms-5 text-center md:text-left">
        <h1 className="mt-8 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 lg:mb-5 md:mb-5">
          Hi, I'm Waqas
        </h1>
        <h1 className="md:mt-0 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-blue-400">
          MERN Stack Developer
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg">
          My expertise in frontend development includes HTML, CSS, JavaScript,
          and React, while my backend skills encompass Express JS and Next JS.
          I am well-versed in using frameworks such as Tailwind CSS and
          Bootstrap to create responsive and visually appealing web
          applications. Additionally, I have extensive experience in database
          management using MongoDB and Mongoose.
        </p>
        <div className="mt-10">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 font-bold dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Hire Me
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 font-bold dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Let's Talk
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;

