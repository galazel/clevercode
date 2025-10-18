import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { useNavigate } from "react-router-dom";

const Badge = ({ children, className = "" }) => (
  <div
    className={`inline-flex items-center rounded-full border border-transparent px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
  >
    {children}
  </div>
);

function Roadmaps() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const milestones = [
    {
      title: "Frontend Development",
      description:
        "Learn HTML, CSS, and JavaScript, then master React to build dynamic and responsive user interfaces.",
      color: "bg-red-500",
      accent: "border-red-500",
    },
    {
      title: "Backend Development",
      description:
        "Master databases, APIs, and frameworks like Node.js or Spring Boot to power your applications’ logic.",
      color: "bg-amber-500",
      accent: "border-amber-500",
    },
    {
      title: "Full Stack Development",
      description:
        "Combine frontend and backend skills to create complete web applications and deploy them online.",
      color: "bg-blue-500",
      accent: "border-blue-500",
    },
    {
      title: "Quality Assurance Learning",
      description:
        "Perform comprehensive QA, security audits, finalize documentation, and execute the product launch.",
      color: "bg-emerald-500",
      accent: "border-emerald-500",
    },
  ];
  const navigate = useNavigate();
  const handleOnClick = (index) => {
    milestones.forEach((e, i) => {
      if (i == index && isLoggedIn) navigate("/user");
    });
  };

  return (
    <section
      className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 font-sans justify-center"
      id="roadmap"
    >
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight text-center">
        Project Journey Roadmap
      </h2>
      <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl">
        This is our path forward, marking key milestones from initial concept to
        a successful deployment.
      </p>
      <div className="hidden md:block w-full max-w-6xl relative h-72">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 w-full h-3 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-full shadow-inner" />

        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 w-full flex justify-between px-8">
          {milestones.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-[20%] group"
            >
              <div
                className={`relative z-10 bg-white border-4 ${item.accent} rounded-full w-10 h-10 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition duration-300 cursor-pointer`}
              >
                <MapPin className={`w-5 h-5 text-gray-800 ${item.color}`} />
              </div>

              <div className="mt-8">
                <Card
                  className={`w-full transition duration-300 group-hover:shadow-xl  border-transparent group-hover:${item.accent} group-hover:border-opacity-100 cursor-pointer`}
                  onClick={handleOnClick(index)}
                >
                  <CardContent className="p-5 text-center flex flex-col items-center">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden w-full max-w-md mx-auto">
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-gray-200" />
          {milestones.map((item, index) => (
            <div key={index} className="mb-8 flex items-start relative group">
              <div
                className={`z-10 bg-white border-4 ${item.accent} rounded-full w-10 h-10 flex items-center justify-center shadow-lg shrink-0 mr-4 transition duration-300 group-hover:scale-105`}
              >
                <MapPin className={`w-5 h-5 text-gray-800 ${item.color}`} />
              </div>
              <Card className="flex-1 ml-2 transition duration-300 shadow-lg group-hover:shadow-2xl">
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Roadmaps;
