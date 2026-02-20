import Image from "next/image";
import Link from "next/link";

function PrintPage() {
  return (
    <main className="w-full min-h-screen mt-20 sm:mt-24 md:mt-28 px-4 font-vazirmatn">
      <div className="flex flex-col items-center justify-center gap-6">
        <ul className="flex flex-col items-center gap-4 w-full max-w-lg">
          <li className="w-full">
            <Link
              href="tel:09029555426"
              className="w-full flex flex-row-reverse items-center justify-between p-4 bg-white rounded-xl shadow-lg shadow-green-400/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/images/phone.png"
                  alt="آیکون تلفن"
                  width={950}
                  height={250}
                  className="w-10 sm:w-12 h-auto object-contain"
                />
                <span className="text-gray-700 font-bold text-base sm:text-lg">
                  شماره موبایل جهت ذخیره کلیک کنید
                </span>
              </div>
              <span className="text-left font-mono text-sm sm:text-base text-gray-600">
                0902 955 5426
              </span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="https://web.eitaa.com/#@ghalaaamm"
              className="w-full  flex items-center justify-center shadow-xl shadow-orange-400/40  p-4 bg-white rounded-xl  hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center gap-3 m-auto">
                <Image
                  src="/images/eita.png"
                  alt="آیکون تلفن"
                  width={950}
                  height={250}
                  className="w-10 sm:w-12 h-auto object-contain"
                />
                <span className="text-gray-700 font-bold text-base sm:text-lg">
                  برای باز شدن ایتا کلیک کنید
                </span>
              </div>
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="https://web.telegram.org/k/#@ghalaaamm"
              className="w-full  flex items-center justify-center shadow-xl shadow-blue-400/40  p-4 bg-white rounded-xl  hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/images/telegram.png"
                  alt="آیکون تلفن"
                  width={950}
                  height={250}
                  className="w-10 sm:w-12 h-auto object-contain"
                />
                <span className="text-gray-700 font-bold text-base sm:text-lg">
                  برای باز شدن تلگرام کلیک کنید
                </span>
              </div>
            </Link>
          </li>
        </ul>

        <Link
          href="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 transition-all duration-300 mt-4"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </main>
  );
}

export default PrintPage;
