import Image from "next/image";
import Link from "next/link";

function Platforms() {
  return (
    <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 flex justify-center items-center p-3 sm:p-4 rounded-xl shadow-lg shadow-blue-400/30 m-auto gap-3 sm:gap-5 flex-wrap">
      <Link
        href="tel:09029555426"
        className="size-8 sm:size-10 shadow-xl shadow-green-400/30 bg-transparent hover:-translate-y-1 rounded-xl flex items-center justify-center text-white font-bold my-hover transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/phone.png"
          alt="logo phone"
          width={950}
          height={250}
          className="w-8 sm:w-10 h-auto object-contain"
        />
      </Link>

      <Link
        href="https://web.eitaa.com/#@ghalaaamm"
        className="size-8 sm:size-10 shadow-xl shadow-orange-400/40 hover:-translate-y-1 bg-transparent rounded-xl flex items-center justify-center gap-2 font-bold my-hover transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/eita.png"
          alt="logo eitaa"
          width={950}
          height={250}
          className="w-8 sm:w-10 h-auto object-contain"
        />
      </Link>

      <Link
        href="https://web.telegram.org/k/#@ghalaaamm"
        className="size-8 sm:size-10 shadow-xl shadow-blue-400/40 bg-transparent rounded-xl hover:-translate-y-1 flex items-center justify-center text-white font-bold my-hover transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/telegram.png"
          alt="telegram icon"
          width={800}
          height={500}
          className="w-8 sm:w-10 h-auto object-contain"
        />
      </Link>
    </div>
  );
}

export default Platforms;
