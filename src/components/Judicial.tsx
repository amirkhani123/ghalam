import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const services = [
  "ارسال اظهارنامه",
  "تنظیم و ارسال دادخواست",
  "ثبت نام و ویرایش ثنا",
  "نوبت دهی قضایی",
  "پیگیری لوایح",
];

function Judicial() {
  return (
    <section className="w-full text-center font-vazirmatn my-16 px-4">
      <h2 className="font-bold text-2xl md:text-4xl text-green-500">
        خدمات قضایی <span className="text-sky-600">| سریع و قابل اعتماد</span>{" "}
        ⚖️
      </h2>

      <p className="font-semibold mt-3 text-sm md:text-lg text-neutral-500">
        انجام کلیه کارهای قضایی همراه با مشاوره رایگان و خصوصی
      </p>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20 mt-10 max-w-6xl mx-auto">
        {/* تصویر */}
        <div className="relative w-full md:w-1/2">
          <div className="absolute inset-0 bg-sky-500/10 rounded-3xl blur-2xl scale-95" />
          <Image
            src="/images/judicial.png"
            alt="خدمات قضایی"
            width={900}
            height={500}
            className="relative w-full h-auto rounded-2xl"
          />
        </div>

        {/* لیست */}
        <ul className="w-full md:w-1/2 space-y-4 text-right">
          {services.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 font-bold p-3 rounded-xl bg-neutral-50 hover:bg-sky-50 transition-colors duration-300"
            >
              <FaCheckCircle className="text-sky-500 shrink-0" size={26} />
              <span className="text-lg md:text-xl text-neutral-800">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Judicial;
