import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
function Features() {
  const features = [
    {
      img: "https://picsum.photos/seed/pic1/300/200",
      title: "AI-Generated Quizzes",
      definition:
        "Every lesson ends with a personalized quiz that adapts to your progress, strengths, and weaknesses.",
      click: "Learn Here",
    },
    {
      img: "https://picsum.photos/seed/pic2/300/200",
      title: "Smart Coding Practice",
      definition:
        "Practice solving AI-generated programming problems designed to strengthen your logic and problem-solving skills.",
      click: "Practice Code",
    },
    {
      img: "https://picsum.photos/seed/pic4/300/200",
      title: "Project Certification",
      definition:
        "Build real projects and earn certifications to showcase your programming mastery. gfdsagasd",
      click: "View Certifications",
    },
  ];

  return (
    <section className="text-gray-600 body-font mb-20 h-full " id="features">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Learn. Practice. Get Certified — The AI Way.
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Learn, practice, and prove your skills with CleverCode’s adaptive AI
            learning system. From coding challenges to personalized quizzes, our
            AI ensures your learning experience matches your pace and potential.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="grid grid-cols-3 gap-5">
            {features.map((item, index) => {
              return (
                <div
                  className="flex flex-col gap-5 bg-gray-100 w-[25vw] p-5 rounded-lg"
                  key={index}
                >
                  <div>
                    <img
                      className="h-full rounded w-full object-cover object-center mb-6"
                      src={item.img}
                      alt="content"
                    />
                  </div>

                  <h3 className="tracking-widest text-indigo-500 text-3xl font-medium title-font">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-base">{item.definition}</p>
                  <Button className="w-[9vw]">{item.click}<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
