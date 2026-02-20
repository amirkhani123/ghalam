import { servicesConstant } from "@/constants/constants";
import Image from "next/image";

function Services() {
  return (
    <section className="py-12 sm:py-16 px-4 bg-linear-to-b from-gray-50 to-white w-full font-vazirmatn">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
          {servicesConstant.map((item, index) => {
            return (
              <div
                key={index}
                id="services"
                className="flex items-center flex-col w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)] lg:w-1/4 bg-white rounded-2xl p-3 sm:p-4 shadow-lg shadow-blue-300/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={950}
                  height={500}
                  className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto object-contain"
                  loading="lazy"
                />
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-neutral-700 mb-2 text-center">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
