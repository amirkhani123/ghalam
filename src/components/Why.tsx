import { featuresConstant } from "@/constants/constants";

function Why() {
  return (
    <section
      className="py-12 sm:py-16 px-4 bg-liner-to-b from-gray-50 to-white w-full font-vazirmatn"
      id="why"
    >
      <div className="container mx-auto">
        <div className="flex items-stretch justify-center gap-4 sm:gap-6 flex-wrap">
          {featuresConstant.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-center flex-col w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] xl:w-1/4 bg-white rounded-2xl p-4 sm:p-6 shadow-lg shadow-blue-300/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl text-blue-500 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Why;
