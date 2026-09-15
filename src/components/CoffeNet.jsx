import {
  FaPrint, // چاپ و پرینت ✅
  FaCopy, // کپی و اسکن ✅
  FaIdCard, // کارت سوخت ✅
  FaGlobe, // ثبت‌نام‌های اینترنتی (بهتر از FaWifi)
  FaFileInvoiceDollar, // پرداخت قبوض ✅
  FaScroll, // گواهی انحصار وراثت (بهتر از FaPassport)
  FaHome, // کدره‌گیری خودنویس (بهتر از FaMobileAlt)
  FaCar, // نوبت‌دهی تعویض پلاک (بهتر از FaCamera)
} from "react-icons/fa";
const services = [
  { icon: FaPrint, title: "چاپ و پرینت" },
  { icon: FaCopy, title: "کپی و اسکن" },
  { icon: FaIdCard, title: "کارت سوخت" },
  { icon: FaGlobe, title: "ثبت‌نام اینترنتی" },
  { icon: FaFileInvoiceDollar, title: "پرداخت قبوض" },
  { icon: FaScroll, title: "انحصار وراثت" },
  { icon: FaHome, title: "کدره‌گیری خودنویس" },
  { icon: FaCar, title: "تعویض پلاک" },
];

function CoffeNet() {
  return (
    <section
      id="services"
      className="w-full py-16 sm:py-20 px-4 bg-primary font-vazirmatn scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        {/* تیتر بخش */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            خدمات <span className="text-sky-300">کافی‌نت</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-l from-sky-300 to-cyan-300 rounded-full mx-auto mt-4" />
        </div>

        {/* چیدمان فلکس */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center
                w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]
                bg-white/5 backdrop-blur-md rounded-3xl p-6
                border border-white/10
                hover:bg-white/10 hover:border-sky-300/40 hover:-translate-y-2
                transition-all duration-500"
              >
                {/* هاله نورانی پشت آیکون */}
                <div className="absolute top-4 w-20 h-20 bg-sky-300/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* قاب آیکون */}
                <div className="relative flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-sky-300/15 border border-sky-300/30 mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <IconComponent className="text-2xl lg:text-3xl text-sky-300" />
                </div>

                <h3 className="text-base lg:text-lg font-bold text-white">
                  {item.title}
                </h3>

                {/* خط تزئینی پایین */}
                <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-0 h-0.5 bg-gradient-to-l from-sky-300 to-cyan-300 rounded-full transition-all duration-500 group-hover:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CoffeNet;
