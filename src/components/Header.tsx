import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="w-[95%] md:w-[90%] lg:w-[1400px] fixed top-1 left-1/2 -translate-x-1/2 h-[70px] md:h-[85px] flex items-center justify-between p-2 px-3 md:px-4 shadow-lg shadow-sky-200/20 rounded-xl backdrop-blur-xl text-sky-800 overflow-hidden font-bold text-sm md:text-lg z-20 font-zain">
      <ul className="flex gap-3 md:gap-5 lg:gap-10 items-center">
        <li>
          <Link href="/#services" className="links whitespace-nowrap">
            خدمات
          </Link>
        </li>
        <li>
          <Link href="/#why" className="links whitespace-nowrap">
            چرا ما ؟
          </Link>
        </li>
        <li>
          <Link href="/print" className="links whitespace-nowrap">
            پرینت
          </Link>
        </li>
      </ul>
      <Image
        src="/images/logo.png"
        alt="لوگو قلم"
        width={700}
        height={700}
        className="w-[70px] md:w-[90px] lg:w-[106px] h-auto"
        priority
      />
    </header>
  );
}

export default Header;