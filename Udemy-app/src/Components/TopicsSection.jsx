import { useState } from "react";
import CourseCard from "./CourseCard";

import AI1 from "../assets/AI1.jpg"
import AI2 from "../assets/AI2.webp"
import AI3 from "../assets/AI3.webp"
import AI4 from "../assets/AI4.webp"

const topics = [
  "Artificial Intelligence(AI)",
  "Python",
  "Microsoft Excel",
  "AI Agents and Agentic AI",
  "Digital Marketing",
  "Amazon AWS",
];

const coursesByTopic = {
  "Artificial Intelligence(AI)": [
    {
      img: AI1,
      title: "The AI Engineer Course 2025: Complete AI Engineer Bootcamp",
      careers: 365,
      price: "E£204.00",
    },
    {
      img: AI2,
      title: "Intro to AI Agents and Agentic AI",
      careers: 365,
      price: "E£180.00",
    },
    {
      img: AI3,
      title: "Artificial Intelligence for Business + ChatGPT Prize [2025]",
      careers: 200,
      price: "E£220.00",
    },
    {
      img: AI4,
      title: "Data Science & AI Masters 2025 - From Python To Gen AI",
      careers: 310,
      price: "E£199.00",
    },
  ],

  Python: [
    {
      title: "Complete Python Bootcamp 2025",
      careers: 420,
      price: "E£250.00",
    },
    {
      title: "Python for Data Science and ML",
      careers: 280,
      price: "E£190.00",
    },
  ],

  "Microsoft Excel": [
    {
      title: "Microsoft Excel – Excel from Beginner to Advanced",
      careers: 530,
      price: "E£150.00",
    },
  ],

  "AI Agents and Agentic AI": [
    {
      title: "Intro to Agentic AI",
      careers: 200,
      price: "E£175.00",
    },
  ],

  "Digital Marketing": [
    {
      title: "Digital Marketing Masterclass",
      careers: 600,
      price: "E£210.00",
    },
  ],

  "Amazon AWS": [
    {
      title: "AWS Cloud Practitioner Certification 2025",
      careers: 300,
      price: "E£199.00",
    },
  ],
};

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

      <div className="border-b border-gray-300 flex flex-wrap gap-3 mb-12">
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            className={`px-4 py-2 rounded-full font-semibold 
              ${selectedTopic === topic ? "text-black border-b-2 border-black" : "text-gray-500 hover:text-black"}
            `}
          >
            {topic}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {coursesByTopic[selectedTopic].map((course, index) => (
          <CourseCard
            key={index}
            img={course.img}
            title={course.title}
            careers={course.careers}
            price={course.price}
          />
        ))}
      </div>

    </section>
  );
};

export default TopicsSection;
