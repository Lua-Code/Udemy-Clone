import offer from "../assets/learnmore.jpg"

const OfferCard = () =>{
    return(
    <div className="w-full max-w-5xl mx-auto  px-4">
      <div className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img
          src={offer}
          alt="Offer"
          className="w-full h-64 sm:h-80 md:h-96 object-cover"
        />

        <div className="absolute bottom-32 left-12 bg-white bg-opacity-90 px-4 py-2 rounded shadow w-90 h-40">
            <p className="text-black font-medium text-xl sm:text-5xl md:text-2xl">
                Learn more, spend less — Black Friday Sale from E£279.99
            </p>
            <p className="text-black font-light text-xs py-4">Sitewide savings on thousands of courses. Ends Nov 28.</p>

        </div>

      </div>
    </div>
    )
}

export default OfferCard