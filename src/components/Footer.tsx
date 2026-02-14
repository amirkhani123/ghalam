import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" text-neutral-700 font-vazirmatn mt-20" dir="rtl">
      <hr className="h-1 bg-blue-700" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between">
          {/* درباره ما */}
          <div className="w-1/3">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              درباره ما
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              کافی‌نت قلم با بیش از ۵ سال سابقه درخشان، آماده ارائه بهترین خدمات
              اینترنتی، چاپ و تکثیر، و خدمات اداری به شما عزیزان می‌باشد.
            </p>
          </div>

          {/* ساعات کاری */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              ساعات کاری
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <FaClock className="text-blue-500" />
                <span>شنبه تا پنجشنبه: 24 ساعته</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaClock className="text-blue-500" />
                <span>جمعه‌ها: 16 الی 24</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaClock className="text-blue-500" />
                <span>ایام تعطیل: 15 الی 24</span>
              </li>
            </ul>
          </div>

          {/* اطلاعات تماس */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              تماس با ما
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-blue-500 flex-shrink-0" />
                <span>تهران , پونک بلوار میرزابابا </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-blue-500" />
                <span dir="ltr">0902 955 5426</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
