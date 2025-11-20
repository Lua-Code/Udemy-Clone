import {ArrowRight} from "lucide-react"

const SkillCard = ({ img, title, link }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover block"
      />

        <div className="absolute bottom-4 left-4 bg-white bg-opacity-95 p-3 rounded-lg shadow-md w-40 sm:w-48 md:w-40">
            <div className="flex flex-col justify-center h-full">
                <p className="text-gray-900 font-semibold text-sm sm:text-base">{title}</p>
            </div>

            <div className="mt-2 relative left-30">
                <ArrowRight size={13} />
            </div>
        </div>
    </div>
  );
};

export default SkillCard;
