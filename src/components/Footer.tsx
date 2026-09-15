import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

const sections = [
  {
    title: "ساعات کاری",
    items: [
      { icon: FaClock, text: "شنبه تا پنجشنبه: ۲۴ ساعته" },
      { icon: FaClock, text: "جمعه‌ها: ۱۶ الی ۲۴" },
      { icon: FaClock, text: "ایام تعطیل: ۱۵ الی ۲۴" },
    ],
  },
  {
    title: "تماس با ما",
    items: [
      {
        icon: FaMapMarkerAlt,
        text: "تهران، پونک شمالی، بزرگراه ستاری، بلوار میرزابابایی",
      },
      { icon: FaPhone, text: "۰۹۰۲ ۹۵۵ ۵۴۲۶", ltr: true },
    ],
  },
];

function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative mt-16 sm:mt-20 bg-primary text-white font-vazirmatn overflow-hidden"
    >
      {/* هاله‌های تزئینی */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      {/* خط گرادیانت بالا */}
      <div className="h-1 bg-gradient-to-l from-sky-300 via-cyan-300 to-sky-300" />

      <div className="relative  mx-auto w-full px-4 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-6 lg:gap-12">
          {/* درباره ما */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 sm:h-6 bg-sky-300 rounded-full" />
              درباره ما
            </h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              کافی‌نت قلم با بیش از ۵ سال سابقه درخشان، آماده ارائه بهترین خدمات
              اینترنتی، چاپ و تکثیر، و خدمات اداری به شما عزیزان می‌باشد.
            </p>
          </div>

          {/* بخش‌های تکراری */}
          {sections.map((section) => (
            <div key={section.title} className="w-full md:w-1/3">
              <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 sm:h-6 bg-sky-300 rounded-full" />
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-white/70 text-sm sm:text-base"
                    >
                      <Icon className="text-sky-300 mt-1 shrink-0" />
                      <span dir={item.ltr ? "ltr" : undefined}>
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* کپی‌رایت */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-xs sm:text-sm text-white/50">
            © {new Date().getFullYear()} کافی‌نت قلم — تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
