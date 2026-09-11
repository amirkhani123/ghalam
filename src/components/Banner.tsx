import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden  dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 font-zain">
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 px-6 md:px-10 lg:px-16 pt-24 md:pt-28 pb-12">
        <div className="flex-1 text-center md:text-right space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-800 dark:text-white">
            به دنیای{" "}
            <span className="bg-gradient-to-l from-blue-600 to-purple-600 bg-clip-text text-transparent">
              قلم
            </span>{" "}
            خوش آمدید
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            تجربه‌ای متفاوت از طراحی و هنر را با ما کشف کنید. جایی که ایده‌ها به
            واقعیت تبدیل می‌شوند.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-l from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              خدمات قضایی و اینترنتی
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center w-full">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 scale-95" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200/50 dark:ring-slate-700/50 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
              <Image
                src="/images/poster.jpg"
                alt="عکس هدر"
                width={500}
                height={500}
                className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
