import { servicesConstant } from "@/constants/constants";
import Image from "next/image";

function Services() {
  return (
    <section className="py-16 px-4 bg-linera-to-b from-gray-50 to-white w-full font-vazirmatn">
      <div className="container mx-auto ">
        <div className="flex items-center justify-center gap-6 flex-wrap ">
          {servicesConstant.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center flex-col  w-1/4 bg-white rounded-2xl p-2 shadow-lg shadow-blue-300/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={950}
                  height={500}
                  className="w-32"
                />
                <h3 className="text-lg font-bold text-neutral-700 mb-2">
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
