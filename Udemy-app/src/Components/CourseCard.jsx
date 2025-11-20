const CourseCard = ({ img, title, careers, price }) => {
  return (
    <div className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg cursor-pointer transition-shadow duration-300">
      <img src={img} alt={title} className="w-full h-36 sm:h-40 md:h-48 object-cover" />

      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-black font-semibold text-sm sm:text-base">{title}</h3>
        <p className="text-gray-500 text-xs sm:text-sm">{careers} careers</p>
        <p className="text-black font-semibold text-sm sm:text-base">{price}</p>
      </div>
    </div>
  );
};

export default CourseCard;
