import React from "react";
import { Button } from "@/components/ui/button"
export default function Hero() {
  return (
    <section className="text-gray-600 body-font mb-20 h-full ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p>Empowering You to Code Smarter with AI</p>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Learn programming the smart way — through personalized lessons,
            AI-generated exercises, and project-based mastery.
          </h1>
          <p className="mb-8 leading-relaxed">
            Progress at your own pace and earn certificates as you build real-world projects.
          </p>
          <div className="flex justify-center gap-5">
           <Button>Get Started</Button>
           <Button variant="outline">View Roadmaps</Button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
}
