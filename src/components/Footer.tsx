import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="text-neutral-700 font-vazirmatn mt-16 sm:mt-20"
      dir="rtl"
    >
      <hr className="h-1 bg-blue-700" />

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-6 lg:gap-12">
          {/* درباره ما */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 sm:h-6 bg-blue-500 rounded-full"></span>
              درباره ما
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              کافی‌نت قلم با بیش از ۵ سال سابقه درخشان، آماده ارائه بهترین خدمات
              اینترنتی، چاپ و تکثیر، و خدمات اداری به شما عزیزان می‌باشد.
            </p>
          </div>

          {/* ساعات کاری */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 sm:h-6 bg-blue-500 rounded-full"></span>
              ساعات کاری
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                <FaClock className="text-blue-500  text-sm sm:text-base" />
                <span>شنبه تا پنجشنبه: ۲۴ ساعته</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                <FaClock className="text-blue-500  text-sm sm:text-base" />
                <span>جمعه‌ها: ۱۶ الی ۲۴</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                <FaClock className="text-blue-500 text-sm sm:text-base" />
                <span>ایام تعطیل: ۱۵ الی ۲۴</span>
              </li>
            </ul>
          </div>

          {/* اطلاعات تماس */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 sm:h-6 bg-blue-500 rounded-full"></span>
              تماس با ما
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                <FaMapMarkerAlt className="text-blue-500  text-sm sm:text-base" />
                <span>تهران، پونک، بلوار میرزابابا</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                <FaPhone className="text-blue-500  text-sm sm:text-base" />
                <span dir="ltr" className="text-left">
                  ۰۹۰۲ ۹۵۵ ۵۴۲۶
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
