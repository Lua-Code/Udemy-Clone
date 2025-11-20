import { Trophy, Stars, MessageSquare, Lightbulb } from "lucide-react";
import ReimagineImage from "../assets/ai-career@1x.webp"; 

const ReimagineSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="bg-[#20222f] rounded-xl overflow-hidden shadow-lg py-12 px-5 hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row h-auto ">
        
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-white font-medium text-2xl sm:text-4xl md:text-3xl lg:text-4xl mb-4 leading-tight">
            Reimagine your career in the AI era
          </h2>
          <p className="text-[#b7bcd4] font-light text-sm sm:text-base mb-6">
            Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <p className="text-white text-xs font-light">Learn AI and more</p>
            <p className="text-white text-xs font-light">Prep for a certification</p>
            <p className="text-white text-xs font-light">Practice with AI coaching</p>
            <p className="text-white text-xs font-light">Advance your career</p>
          </div>

          <button className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-indigo-700 w-max mb-2">
            Learn More
          </button>

          <p className="text-[#b7bcd4] font-light text-xs">Starting at E£204.00/month</p>
        </div>

        <div className="md:w-1/2 pb-5 pr-5">
          <img
            src={ReimagineImage}
            alt="Reimagine Career"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default ReimagineSection;

