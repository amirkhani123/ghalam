import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

function Judicial() {
  return (
    <section className="w-full text-center font-vazirmatn my-10 px-4">
      <h1 className="font-bold text-xl md:text-4xl text-neutral-800">
        خدمات قضایی | سریع و قابل اعتماد ⚖️
      </h1>

      <p className="font-semibold mt-2 text-[12px] md:text-lg text-neutral-600/70">
        انجام کلیه کارهای قضایی همراه با مشاوره رایگان و خصوصی
      </p>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 p-5">
        {/* تصویر */}
        <Image
          src="/images/judicial.png"
          alt="خدمات قضایی"
          width={900}
          height={500}
          className="w-full md:w-1/2"
        />

        {/* لیست */}
        <ul className="w-full md:w-1/2 space-y-5 text-right">
          <li className="flex items-center gap-3 font-bold">
            <FaCheckCircle color="#b2b7fff" size={28} />
            <span className="text-lg md:text-2xl text-neutral-800">
              ارسال اظهارنامه
            </span>
          </li>

          <li className="flex items-center gap-3 font-bold">
            <FaCheckCircle color="#b2b7fff" size={28} />
            <span className="text-lg md:text-2xl text-neutral-800">
              تنظیم و ارسال دادخواست
            </span>
          </li>

          <li className="flex items-center gap-3 font-bold">
            <FaCheckCircle color="#b2b7fff" size={28} />
            <span className="text-lg md:text-2xl text-neutral-800">
              ثبت نام و ویرایش ثنا
            </span>
          </li>

          <li className="flex items-center gap-3 font-bold">
            <FaCheckCircle color="#b2b7fff" size={28} />
            <span className="text-lg md:text-2xl text-neutral-800">
              نوبت دهی قضایی
            </span>
          </li>

          <li className="flex items-center gap-3 font-bold">
            <FaCheckCircle color="#b2b7fff" size={28} />
            <span className="text-lg md:text-2xl text-neutral-800">
              پیگیری لوایح
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Judicial;
