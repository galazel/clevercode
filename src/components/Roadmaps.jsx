import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Roadmaps() {
  const roadmaps = [
    {
      img: "https://picsum.photos/seed/frontend/300/200",
      title: "Frontend Development",
      definition:
        "Learn HTML, CSS, and JavaScript, then master React to build dynamic and responsive user interfaces.",
      click: "Start Frontend",
    },
    {
      img: "https://picsum.photos/seed/backend/300/200",
      title: "Backend Development",
      definition:
        "Master databases, APIs, and frameworks like Node.js or Spring Boot to power your applications’ logic.",
      click: "Explore Backend",
    },
    {
      img: "https://picsum.photos/seed/fullstack/300/200",
      title: "Full Stack Development",
      definition:
        "Combine frontend and backend skills to create complete web applications and deploy them online.",
      click: "Become Full Stack",
    },
    {
      img: "https://picsum.photos/seed/data/300/200",
      title: "Data Science",
      definition:
        "Analyze, visualize, and interpret complex datasets using Python, Pandas, and machine learning models.",
      click: "Start Learning",
    },
    {
      img: "https://picsum.photos/seed/cyber/300/200",
      title: "Cybersecurity",
      definition:
        "Protect systems and data by learning ethical hacking, penetration testing, and security best practices.",
      click: "Defend Systems",
    },
    {
      img: "https://picsum.photos/seed/ai/300/200",
      title: "Artificial Intelligence",
      definition:
        "Understand neural networks, natural language processing, and deep learning to build smart systems.",
      click: "Learn AI",
    },
    {
      img: "https://picsum.photos/seed/devops/300/200",
      title: "DevOps Engineering",
      definition:
        "Learn CI/CD, Docker, and cloud automation to improve software deployment and team collaboration.",
      click: "Master DevOps",
    },
    {
      img: "https://picsum.photos/seed/uiux/300/200",
      title: "UI/UX Design",
      definition:
        "Design beautiful, user-friendly interfaces and improve user experience through research and prototyping.",
      click: "Design Better",
    },
    {
      img: "https://picsum.photos/seed/mobile/300/200",
      title: "Mobile App Development",
      definition:
        "Develop cross-platform apps using React Native or Flutter and publish them to app stores.",
      click: "Build Apps",
    },
    {
      img: "https://picsum.photos/seed/cloud/300/200",
      title: "Cloud Computing",
      definition:
        "Learn AWS, Azure, and Google Cloud fundamentals to manage and deploy scalable web applications.",
      click: "Explore Cloud",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Available Roadmaps
          </h1>
        </div>
        <div className="w-full">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {roadmaps.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="w-full bg-white shadow-md">
                      <CardContent className="flex flex-col">
                        <div className="mb-4">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 flex-1">
                          {item.definition}
                        </p>
                        <button className="self-start px-4 py-2 bg-indigo-500 text-white text-sm rounded-md hover:bg-indigo-600 transition-colors">
                          {item.click}
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Roadmaps;
