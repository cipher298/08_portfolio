import React from 'react';

const Info = () => {
  return (
    <div className="flex flex-col justify-around px-4 pt-4 pb-24 lg:flex-row lg:py-24 bg-slate-950">
      {/* My Address */}
      <div className="flex flex-col">
        <div className="flex items-center gap-4 lg:flex-row">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-900 rounded text-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
            My Address
          </h3>
        </div>
        <div>
          <p className="text-gray-600 dark:text-slate-400">
            District 9, Thu Duc city
          </p>
          <p className="text-gray-600 dark:text-slate-400">Ho Chi Minh City</p>
        </div>
      </div>

      {/* Contact */}
      <div className="flex flex-col">
        <div className="flex items-center gap-4 lg:flex-row">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-900 rounded text-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
              <path d="M15 7a2 2 0 0 1 2 2"></path>
              <path d="M15 3a6 6 0 0 1 6 6"></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
            Contact
          </h3>
        </div>
        <div>
          <p className="text-gray-600 dark:text-slate-400">
            Mobile: +84 389 262 313
          </p>
          <p className="text-gray-600 dark:text-slate-400">
            Mail: vxt.298@gmail.com
          </p>
        </div>
      </div>

      {/* Profile */}
      <div className="flex flex-col">
        <div className="flex items-center gap-4 lg:flex-row">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-900 rounded text-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
              <path d="M12 7v5l3 3"></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
            Profile
          </h3>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/voxuanthinh/"
            className="text-gray-600 dark:text-slate-400"
          >
            Linkedin
          </a>
          <br />
          <a
            href="https://drive.google.com/file/d/1I2AVHBHW684D2lXY6SPDq0ezzYaF1nD_/view?usp=sharing"
            className="text-gray-600 dark:text-slate-400"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
