import React from "react";

function About() {
  const about = [
    "Interactive lessons that simplify complex coding concepts",
    "AI-generated quizzes that adapt to your progress",
    "Smart coding practice to strengthen logic and problem-solving",
    "Real-world projects that apply your skills",
  ];

  return (
    <section className="text-gray-600 body-font" id="about">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            About
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            How CleverCode Works?
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Learn, practice, and grow your coding skills through a smart,
            AI-powered learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {about.map((item, index) => (
            <div className="px-8 py-6 border-l-2 border-gray-200 border-opacity-60" key={index}>
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Shooting Stars
              </h2>
              <p className="leading-relaxed text-base mb-4">{item}</p>
              <a className="text-indigo-500 inline-flex items-center hover:text-indigo-700 cursor-pointer">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
