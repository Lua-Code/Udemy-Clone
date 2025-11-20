import { useState } from "react";

import CourseCard from "./CourseCard";

const TopicsSection = () => {
    const [selectedTopic, setSelectedTopic] = useState("Artificial Intelligence(AI)");

  return (
    <section className="rounded-xl bg-white py-20 max-w-5xl mx-auto px-4">

      <div className="mb-8">
        <h2 className="text-black font-light text-3xl mb-4 leading-tight">
          Skills to transform your career and life
        </h2>
        <p className="text-[#7c7d8f] font-light text-sm sm:text-base">
          From critical skills to technical topics, Udemy supports your professional development.
        </p>
      </div>

      <div className="border-b-1 border-gray-300 flex flex-wrap gap-3 mb-12">
        <button className="  text-gray-500 font-semibold px-4 py-2 rounded-full hover:text-black ">
          Artificial Intelligence(AI)
        </button>
        <button className=" text-gray-500 font-semibold px-4 py-2 rounded-full hover:text-black">
          Python
        </button>
        <button className=" text-gray-500 font-semibold px-4 py-2 rounded-full hover:text-black">
          Microsoft Excel
        </button>
        <button className="text-gray-500 font-semibold px-4 py-2 rounded-full hover:text-black">
          AI Agents and Agenetic AI
        </button>
        <button className="text-gray-500 font-semibold px-4 py-2 rounded-full hover:text-black">
          Digital Marketing
        </button>
        <button className="text-gray-500 font-semibold px-4 py-2 rounded-full hover:text-black">
          Amazon AWS
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CourseCard
          title="The AI Engineer Course 2025: Complete AI Engineer Bootcamp"
          careers={365}
          price="E£204.00"
        />
        <CourseCard
          title="Intro to AI Agents and Agentic AI"
          careers={365}
          price="E£180.00"
        />
        <CourseCard
          title="Artificial Intelligence for Business + ChatGPT Prize [2025]"
          careers={200}
          price="E£220.00"
        />
        <CourseCard
          title="Data Science & AI Masters 2025 - From Python To Gen AI"
          careers={310}
          price="E£199.00"
        />
      </div>
    </section>
  );
};

export default TopicsSection;
