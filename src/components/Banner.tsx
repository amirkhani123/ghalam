import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <div className="w-full h-full flex flex-col-reverse md:flex-row items-center justify-center gap-3 md:gap-5 px-4 md:px-8 lg:px-16 mt-16 md:mt-20 font-zain">
      <Image
        src="/images/hero.png"
        alt="عکس هدر"
        width={1080}
        height={950}
        className="w-full md:w-1/2 max-w-125 md:max-w-none"
        priority
      />

      <div className="w-full md:w-1/2 text-center space-y-4 md:space-y-6 lg:space-y-8 px-2 md:px-4">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-sky-800">
          ⚡قلم | سریعتر از همیشه
        </h1>

        <p
          dir="rtl"
          className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed"
        >
          🚗 خدمات خودرویی | 💰 خدمات مالیاتی | ⚖️ امور قضایی | 🏦 خدمات بانکی
        </p>

        <Link
          href="/#serveces"
          className="inline-block px-4 sm:px-5 py-2 sm:py-3 bg-blue-500 shadow-lg shadow-blue-500/50 ring-2 ring-sky-500/50 text-white font-vazirmatn rounded-xl font-semibold my-hover text-sm sm:text-base md:text-lg hover:px-5 sm:hover:px-7 transition-all duration-300"
        >
          مشاهده همه خدمات
        </Link>
      </div>
    </div>
  );
}

export default Banner;
