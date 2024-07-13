import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900">
      <h1 className="mt-8 md:mt-0 text-4xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  text-center">
        About <span className='text-blue-700'>Me</span>
      </h1>
      <div >
        <Image
          src="/images/waqas1.png"
          alt="My Image"
          width={150}
          height={150}
          className="rounded-full mt-10"
        />
      </div>
      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 text-center">
        My expertise in frontend development includes HTML, CSS, JavaScript,
        and React, while my backend skills encompass Express JS and Next JS.
        I am well-versed in using frameworks such as Tailwind CSS and
        Bootstrap to create responsive and visually appealing web
        applications. Additionally, I have extensive experience in database
        management using MongoDB and Mongoose.
      </p>
      <div>
      <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 mt-3">Learn More</button>
      </div>
    </div>
  );
}

export default Page;

