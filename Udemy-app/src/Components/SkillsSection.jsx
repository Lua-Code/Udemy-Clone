import SkillCard from "./SkillCard";
import skill1 from "../assets/generative-ai.webp";
import skill3 from "../assets/data-science.webp";
import skill2 from "../assets/certifications.webp"; 

const SkillsSection = () => {
  return (
    <section className="bg-white py-20 max-w-5xl mx-auto px-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 flex flex-col justify-center">
          <p className="text-black font-medium text-2xl sm:text-4xl md:text-5xl mb-4">
            Learn essential career and life skills
          </p>
          <p className="text-gray-700 font-light text-sm sm:text-base">
            Udemy helps you build in-demand skills fast and advance your career
            in a changing job market.
          </p>
        </div>
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <SkillCard
            img={skill1}
            title="Generative AI"
          />
          <SkillCard
            img={skill2}
            title="IT Certification"
          />
          <SkillCard
            img={skill3}
            title="Data Science"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
