import { featuresContant } from "@/constants/constants";

function Why() {
  return (
    <section className="py-16 px-4 bg-linera-to-b from-gray-50 to-white w-full font-vazirmatn">
      <div className="container mx-auto ">
        <div className="flex items-center justify-center gap-6 flex-wrap ">
          {featuresContant.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-center flex-col  w-1/4 bg-white rounded-2xl p-2 shadow-lg shadow-blue-300/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-4xl text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Why;
